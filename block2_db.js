const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database('./project.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the project database.');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/block2.html');
});

app.get('/showdata', (req, res) => {
  const f_name = req.query.f_name;
  const l_name = req.query.l_name;
  const faculty = req.query.faculty;
  const p_id = req.query.p_id;
  
   const sql = `INSERT INTO User(first_name, last_name, faculty, personal_id) VALUES(?,?,?,?)`;
  db.run(sql, [f_name, l_name, faculty, p_id], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error inserting data into User table.');
    } else {
      console.log(`Rows inserted: ${this.changes}`);
      res.send(`Data saved successfully!`);
    }
  });
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});