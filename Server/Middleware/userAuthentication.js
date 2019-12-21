const mydb = require('./myDB');
const mysql = require('mysql');

function fetchUserID(_authToken) {
    return Promise(function(resolve, reject) {
        var queryBody = "SELECT userID FROM Authentication WHERE authToken = " + mysql.escape(_authToken);
        mydb.query(queryBody)
        .then(function(result) {
            resolve(result[0].userID);
        }, function(error) {
            reject(null);
        })
    })
}

function fetchInventoryID(_authToken) {
    return Promise(function(resolve, reject) {
        fetchUserID(_authToken)
        .then(function(result) {
            var queryBody = "SELECT inventoryID FROM"
        })
    })
}