const express = require('express')
var mysql = require('mysql2')

const app = express()

const port = 3000

var con = mysql.createConnection({
  host: "mysql",
  port: "3306",
  user: "root",
  password: "123456",
  database: "mydatabase"
});

con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
})

app.get('/', (req, res) => {
  var sql = "SELECT * FROM users"
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})