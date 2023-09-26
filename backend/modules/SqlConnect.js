const mysql = require('mysql2'); //import mysql2 lib
// if insert it will return "insertId" as id of the row that just inserted

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "PetScarey",
    port: 3306,
}); //create pool connection to mysql server

module.exports = {db}; //export db 