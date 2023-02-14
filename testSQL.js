const sqlite3 = require('sqlite3').verbose();
let sql;

//connect DB
const db = new sqlite3.Database('./project.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
});

//create table
sql = "create table users(first_name,last_name,faculty,personal_ID)";
db.run(sql);  