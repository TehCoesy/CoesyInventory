const mydb = require('../Middleware/myDB');
const mysql = require('mysql');
const userAuth = require('../Middleware/userAuthentication');

function getItemCount(_inventoryID, _itemID) {
    return new Promise(function(resolve, reject) {
        var queryBody = "SELECT itemCount FROM Items WHERE inventoryID = " + mysql.escape(_inventoryID) + " AND itemID = " + mysql.escape(_itemID);
        mydb.query(queryBody)
        .then(function(result) {
            resolve(result[0].itemCount)
        }, function(error) {
            reject(null);
        })
    })
}

module.exports = {
    getItemCount: getItemCount
}