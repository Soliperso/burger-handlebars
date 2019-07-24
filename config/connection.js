const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'password',
  database : 'burgers_db'
});
 
connection.connect(err => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(`Connected to as id ${connection.threadId}`)
  }
});


module.exports = connection;