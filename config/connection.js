const mysql = require("mysql");


connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });

connection.connect(err => {
    if (err) {
        return console.error(err);
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;