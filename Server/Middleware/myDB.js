const mysql = require('mysql');

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'myinventory',
    port     : 3312
});

module.exports = {
    query: function() {

        //Sample
        //function("INSERT INTO Users(userName, password) VALUES (?,?)", ['myUser','1234']);
        //SQL_Body = "INSERT INTO Users(userName, password) VALUES (?,?)";
        //SQL_Args = ['myUser','1234'] and the Rest...

        var SQL_Body = arguments[0];
        var SQL_Args = [];

        for (var i = 1; i < arguments.length; i++) {
            SQL_Args.push(arguments[i]);
        }

        return new Promise(function(resolve, reject) {
            pool.query(SQL_Body, SQL_Args, function(err, rows, field) {
                //console.log(rows);
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }
}