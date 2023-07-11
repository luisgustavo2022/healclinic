 const mysql = require("mysql2/promise");

 const connection = mysql.createPool({
    host: process.env.MYsql_HOST,
    user: process.env.MYsql_USER,
    password: process.env.MYsql_PASSWORD,
    database: process.env.MYsql_DATABASE,
 });

 module.exports = connection;