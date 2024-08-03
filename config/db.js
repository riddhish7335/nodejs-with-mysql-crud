const mysql = require("mysql2");
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node-api"
})

db.connect( (err) => {
    if(err) throw err;
    if (err) throw err;
    console.log("Database connection has been completed");
}) 

module.exports = db;