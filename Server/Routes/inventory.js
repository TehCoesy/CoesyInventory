const express = require('express');
const mydb = require('../Middleware/myDB');
const mysql = require('mysql');
const userAuth = require('../Middleware/userAuthentication');
const inventoryHelper = require('./inventoryHelper');

const router = new express.Router();

router.post('/addItem', async function(req, res) {
    userAuth.fetchInventoryID(req.body.authToken)
    .then(function(result) {
        var queryBody = "INSERT INTO Items (itemName, itemDescription, itemCount, inventoryID) VALUES ?";
        var queryArgs =[[req.body.name, req.body.desc, req.body.count, result]];
        mydb.query(queryBody, queryArgs)
        .then(function(result) {
            return res.status(200).json({
                status: 200,
                success: true,
                message: "QueryDB Success"
            });
        }, function(error) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "DatabaseError (AddItem)"
            })
        })
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError (InventoryID)"
        })
    })
})


router.post('/deleteItem', async function(req, res) {
    userAuth.fetchInventoryID(req.body.authToken)
    .then(function(result) {
        console.log(result);
        inventoryHelper.getItemCount(result, req.body.id)
        .then(function(result2) {
            if (req.body.count < result2) {
                var newValue = result2 - req.body.count;
                var queryBody = "UPDATE Items " +
                "SET itemCount = " + mysql.escape(newValue) + " " +
                "WHERE itemID = " + mysql.escape(req.body.id);
                mydb.query(queryBody)
                .then(function(result3) {
                    return res.status(200).json({
                        status: 200,
                        success: true,
                        message: "QueryDB (UpdateCount) Success"
                    })
                }, function(error3) {
                    return res.status(400).json({
                        status: 400,
                        success: false,
                        message: "DatabaseError (UpdateCount)"
                    })
                })
            } else {
                var queryBody = "DELETE FROM Items WHERE itemID = " + mysql.escape(req.body.id);
                mydb.query(queryBody)
                .then(function(result3) {
                    return res.status(200).json({
                        status: 200,
                        success: true,
                        message: "QueryDB (DeleteItem) Success"
                    })
                }, function(error3) {
                    console.log(error3);
                    return res.status(400).json({
                        status: 400,
                        success: false,
                        message: "DatabaseError (DeleteItem)"
                    })
                })
            }
        }, function(error2) {
            console.log(error2);
            return res.status(400).json({
                status: 400,
                success: false,
                message: "DatabaseError (ItemCount)"
            })
        })
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError (FetchItems)"
        })
    })
})

router.post('/fetchAll', async function(req, res) {
    userAuth.fetchInventoryID(req.body.authToken)
    .then(function(result) {
        var queryBody = "SELECT * FROM Items WHERE inventoryID = " + mysql.escape(result);
        mydb.query(queryBody)
        .then(function(result) {
            return res.status(200).json({
                status: 200,
                success: true,
                message: "QueryDB Success"
            })
        }, function(error) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "DatabaseError (FetchItems)"
            })
        })
    }, function(error) {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "DatabaseError (InventoryID)"
        })
    })
})

module.exports = router;