const express = require('express');
const mydb = require('../Middleware/myDB');
const mysql = require('mysql');

const router = new express.Router();

router.post('/confirm', async function(req, res) {
    var queryBody = "SELECT * FROM Authentication WHERE authToken = " + mysql.escape(req.body.token);
    mydb.query(queryBody)
    .then(function(result) {
        if (result.length !== 1) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "authToken not verified."
            })
        } else {
            return res.status(200).json({
                status: 200,
                success: true,
                message: "authToken verified."
            })
        }
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError"
        })  
    })
})

router.post('/getID', async function(req, res) {
    var queryBody = "SELECT * FROM Authentication WHERE authToken = " + mysql.escape(req.body.token);
    mydb.query(queryBody)
    .then(function(result) {
        if (result.length !== 1) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "authToken not valid."
            })
        } else {
            return res.status(200).json({
                status: 200,
                success: true,
                message: "Success",
                userID: result[0].userID
            })
        }
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError"
        })  
    })
})

module.exports = router;