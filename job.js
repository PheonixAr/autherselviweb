// function login(){

// }
const express = require('express');
const app = express();
const mssql = require("mysql");
 
// Get request
app.get('/', function (req, res) {
 
    // Config your database credential
    const config = {
        user: 'root',
        password: 'Vijay@2003',
        server: 'localhost',
        database: 'authentication'
    };
 
    // Connect to your database
    mssql.connect(config, function (err) {
 
        // Create Request object to perform
        // query operation
        let request = new mssql.Request();
 
        // Query to the database and get the records
        request.query('select * from student',
            function (err, records) {
 
                if (err) console.log(err)
 
                // Send records as a response
                // to browser
                res.send(records);
 
            });
    });
});
 
let server = app.listen(3306, function () {
    console.log('Server is listening at port 3306...');
});