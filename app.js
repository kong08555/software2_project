const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// middleware สำหรับรับ request body แบบ json
app.use(express.json());

// เชื่อมต่อฐานข้อมูล SQLite
let db = new sqlite3.Database('./test1.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the test1 database.');
});

// เพิ่มข้อมูล
app.get('/api/data', (req, res) => {
     let firstName = req.body.first_name;
     let lastName = req.body.last_name;
    res.send(req.body);

     if (!firstName || !lastName) {
       res.status(400).send('Invalid data. Both first name and last name are required.');
       return;
      }

     db.run(`INSERT INTO SQL4 (first_name, last_name) VALUES (?, ?)`, [firstName, lastName], function(err) {
       if (err) {
         return console.log(err.message);

       }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
      res.send(`Data inserted with rowid ${this.lastID}`);
     });
});



// รับ request ที่ port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
