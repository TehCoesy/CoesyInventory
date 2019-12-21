const express = require('express');
const mydb = require('../Middleware/myDB');

const router = new express.Router();

//Assume Front-end handled register info validation.

router.post('/new_acc', async function handleRegister(req, res) {
    var new_Username = req.body.regUsername;
    var new_Password = req.body.regPassword;
    var new_Email = req.body.regEmail;

    let queryBody = "INSERT INTO Users (userName, password, email) VALUES ? ";
    let queryArgs = [];
    queryArgs.push([new_Username, new_Password, new_Email]);

    await mydb.query(queryBody, queryArgs)
    .then(function(result) {
        return res.status(200).json({
            success: true,
            message: "Successful Register."
        });
    },function(err) {
        //console.log(err.code);
        error_Message = ""
        if (err.code == "ER_DUP_ENTRY") {
            error_Message = "This user already exist.";
        } else {
            error_Message = "Failure to register (QueryDB).";
        }
        console.log(err);
        return res.status(400).json({
            success: false,
            message: error_Message
        })
    })
})

module.exports = router;