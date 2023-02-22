const sqlite3 = require('sqlite3').verbose();

//connect db
const db = new sqlite3.Database('./test1.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
    console.log("connect database")
});

function submitform() {
  // Get the input values
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const name = nameInput.value;
  const age = ageInput.value;

  console.log("can get input")

  // Store the values in an array
  const data = [name, age];

  // Insert the values into the database
  const sql = 'INSERT INTO users(name, age) VALUES(?, ?)';
  db.run(sql, data, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('New user added to the database');
  });

  // Reset the form
  nameInput.value = '';
  ageInput.value = '';
}