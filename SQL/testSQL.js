const sqlite3 = require('sqlite3').verbose();
let sql;

//connect DB
const db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
});