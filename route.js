const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const port = 3000;
const all_data = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = new sqlite3.Database('./project.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the project database.');
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});

app.get('/block2.html', (req, res) => {
  res.sendFile(__dirname + '/block2.html');
});

app.get('/block1.html', (req, res) => {
  res.sendFile(__dirname + '/block1.html');
});

app.get('/project.html', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});


app.get('/puts_data', (req, res) => {
  const f_name = req.query.f_name;
  const l_name = req.query.l_name;
  const faculty = req.query.faculty;
  const p_id = req.query.p_id;
 
   //const sql = `INSERT INTO User(first_name, last_name, faculty, personal_id) VALUES(?,?,?,?)`;
  //db.run(sql, [f_name, l_name, faculty, p_id], function(err) {
    //if (err) {
      //console.error(err.message);
      //res.status(500).send('Error inserting data into User table.');
    //} else {
      //console.log(`Rows inserted: ${this.changes}`);
    //}
  //});
  let data = [f_name, l_name, faculty, p_id];
  console.log("register success");
  all_data.push(data);
  res.sendFile(__dirname + '/inventory.html');
});

app.get('/item',(req, res) =>{
  const oscilloscope = req.query.oscilloscope;
  const power_supply = req.query.power_supply;
  const function_generator = req.query.function_generator;
  const soldering_iron = req.query.soldering_iron;
  const digital_meter = req.query.digital_meter;
  const breadboard = req.query.breadboard;
  

  let item = [oscilloscope,power_supply,function_generator,soldering_iron,digital_meter,breadboard];
  all_data.push(item);
  const combinedData = all_data.reduce((acc, cur) => acc.concat(cur), []);
  console.log(combinedData);
  const sql = `INSERT INTO User(first_name, last_name, faculty, personal_id, oscilloscope, power_supply, function_gen, soldering_iron, digital_meter, breadboard) VALUES(?,?,?,?,?,?,?,?,?,?)`;
  db.run(sql, combinedData, function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error inserting data into User table.');
    } else {
      console.log(`Rows inserted: ${this.changes}`);
    }
  });

  res.sendFile(__dirname + '/block1.html');
  all_data.length = 0;
});

app.get('/show', (req, res) => {
  db.all("SELECT * FROM User", [], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
    } else {
      res.render('block1', { users: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});