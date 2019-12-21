const express = require('express');
const mydb = require('../Middleware/myDB');
const mysql = require('mysql');

const router = new express.Router();

router.post('/getInventoryID', async function(req, res) {
    var queryBody = "SELECT * FROM Inventory WHERE inventoryID = (SELECT inventoryID FROM Users WHERE userID = (SELECT userID FROM Authentication WHERE authToken = " + mysql.escape(req.body.authToken) + "))";
    mydb(queryBody, queryArgs)
    .then(function(result) {
        return res.status(200).json({
            status: 200,
            success: true,
            message: "QueryDB Success",
            inventoryID: result[0].inventoryID
        })
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: true,
            message: "DatabaseError"
        })
    })
})

router.post('/addItem', async function(req, res) {
    var queryBody = "INSERT INTO Items (itemName, itemDescription, itemCount, inventoryID) VALUES ?";
    var queryArgs = [[req.itemName, req.itemDesc, req.count, reg.inventoryID]];
    mydb(queryBody, queryArgs)
    .then(function(result) {
        return res.status(200).json({
            status: 200,
            success: false,
            message: "QueryDB Success"
        })
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError"
        })  
    })
})

router.post('/deleteItem', async function(req, res) {
    var queryBody = "DELETE FROM Items WHERE itemID = " + mysql.escape(req.body.itemID);
    mydb(queryBody)
    .then(function(result) {
        
    }, function(error) {

    })
})

router.post('/fetchAll', async function (req, res) {
    var queryBody = "SELECT * FROM Items WHERE inventoryID = " + mysql.escape(req.body.inventoryID);
    mydb(queryBody)
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

router.post('/check', async function(req, res) {
    var queryBody = "SELECT * FROM Inventory WHERE inventoryID = (SELECT inventoryID FROM Users WHERE userID = (SELECT userID FROM Authentication WHERE authToken = " + mysql.escape(req.body.authToken) + "))";

    mydb.query(queryBody)
    .then(function(result) {
        if (result.length != 0) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "You already registered in an Inventory."
            })
        } else {
            return res.status(200).json({
                status: 200,
                success: true,
                message: "Available."
            })
        }
    }, function(err) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError"
        })
    })
})

module.exports = router;