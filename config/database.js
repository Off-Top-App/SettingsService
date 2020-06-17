const { createPool } = require("mysql");

//Environment variables are used to hide any sensitive information
const connectionPool = createPool({
   port: process.env.DB_PORT,
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.MYSQL_DB,
});

module.exports = connectionPool;
