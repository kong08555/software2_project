const sqlite3 = require('sqlite3').verbose();
let sql_table;

//connect DB
const db = new sqlite3.Database('./project.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
});
//retrieve data
let dataList = require('./block2');

// create table
//sql_table = `CREATE TABLE User(id INTEGER PRIMARY KEY,first_name TEXT,last_name TEXT,faculty TEXT,personal_id INTEGER,item_name TEXT,quantity INTEGER)`;
//db.run(sql_table);

//drop table
//db.run('DROP TABLE users');

//insert data to table
sql_table = `INSERT INTO User(first_name,last_name,faculty,personal_id,item_name,quantuty) VALUES (?,?,?,?,?,?)`;
dataList.forEach(function(data){
db.run(sql_table , data, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
});

db.close();