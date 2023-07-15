 const mysql = require("mysql2/promise");
 require("dotenv").config();

 console.log(process.env.MYsql_HOST );
 console.log(process.env.MYsql_USER );
 console.log(process.env.MYsql_PASSWORD );
 console.log(process.env.MYsql_DATABASE);

 const connection = mysql.createPool({
    host: process.env.MYsql_HOST,
    user: process.env.MYsql_USER,
    password: process.env.MYsql_PASSWORD,
    database: process.env.MYsql_DATABASE,
 });

 module.exports = connection;