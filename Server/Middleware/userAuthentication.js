const mydb = require('./myDB');
const mysql = require('mysql');

function fetchUserID(_authToken) {
    console.log(_authToken)
    return new Promise(function(resolve, reject) {
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
    console.log(_authToken)
    return new Promise(function(resolve, reject) {
        var queryBody = "SELECT organizationID FROM Users WHERE userID = (SELECT userID FROM Authentication WHERE authToken = " + mysql.escape(_authToken) + ")";
            mydb.query(queryBody)
            .then(function(result) {
                resolve(result[0].organizationID);
            }, function(error) {
                reject(null);
        })
    })  
}

module.exports = {
    fetchUserID: fetchUserID,
    fetchInventoryID: fetchInventoryID
}