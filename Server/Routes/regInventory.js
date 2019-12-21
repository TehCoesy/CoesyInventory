const express = require('express');
const mydb = require('../Middleware/myDB');
const mysql = require('mysql');

const router = new express.Router();

function firstAdmin(authToken, inventoryName, res) {
    var queryBody = "SELECT * FROM Inventory WHERE organizationName = " + mysql.escape(inventoryName);
    mydb.query(queryBody)
    .then(function(result) {
        queryBody = "UPDATE Users" + " " +
        "SET organizationID = " + mysql.escape(result[0].inventoryID) + " " +
        "WHERE userID = (SELECT userID FROM Authentication WHERE authToken = " + mysql.escape(authToken) + ")";
        mydb.query(queryBody)
        .then(function(result) {
            return res.status(200).json({
                status: 200,
                success: true,
                message: "QueryDB Success"
            })
        }, function(err) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "DatabaseError"
            })  
        });
    }, function(err) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError"
        })  
    });
}


router.post('/newInventory', async function(req, res) {
    var queryBody = "INSERT INTO Inventory (organizationName, organizationDescription) VALUES ?";   
    var queryArgs = [[req.body.organizationName, req.body.organizationDesc]];
    mydb.query(queryBody, queryArgs)
    .then(function(result) {
        console.log(result);
        return firstAdmin(req.body.authToken, req.body.organizationName, res)
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError"
        })  
    })
})

router.post('/getAll', async function(req, res) {
    var queryBody = "SELECT * FROM Inventory";
    mydb.query(queryBody)
    .then(function(result) {
        return res.status(200).json({
            status: 200,
            success: true,
            message: "QueryDB Success",
            data: result
        })
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError"
        })  
    })
})

module.exports = router;