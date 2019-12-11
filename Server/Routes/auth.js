const express = require('express');
const mydb = require('../Middleware/myDB');
const mysql = require('mysql');

const router = new express.Router();

//Assume Front-end handled login info validation.

function getRandomToken(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function handleLogin(user, given_pass, saved_pass) {
    console.log(user);
    console.log(given_pass);
    console.log(saved_pass);

    if (given_pass == saved_pass) {
        return true;
    } else {
        return false;
    }
}

function saveToken2DB(_token, _userid) {
    var queryBody = "INSERT INTO Authentication (authToken, userID) VALUES ?";
    var queryArgs = [[_token, _userid]];
    mydb.query(queryBody,queryArgs)
    .then(function(error) {
        console.log(error); 
    });
}

router.post('/login', async function(req, res) {
    var queryBody = "SELECT * FROM Users WHERE userName = " + mysql.escape(req.body.user);
    //let queryArgs = [[req.user]];
    await mydb.query(queryBody)
    .then(function(result) {
        //
        //Rows are empty (Username not found).
        //

        if (!result || result.length == 0) {
            return res.status(400).json({
                success: false,
                message: "No such user found."
            })  
        }

        //
        //User with username is found. Checking password.
        //
        if (handleLogin(result[0].userName, req.body.password, result[0].password)) {
            newToken = getRandomToken(10);
            saveToken2DB(newToken,result[0].userName);
            return res.status(200).json({
                success: true,
                message: "Successful Login.",
                myToken: newToken 
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Incorrect Credentials."
            })  
        }


    }, function(err) {
        //
        //Error when querying DB
        //
        return res.status(400).json({
            success: false,
            message: error_Message
        })  
    });
});

module.exports = router;