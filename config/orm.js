const connection = require('../config/connection.js');


// Add helper function for SQL syntax
const printQuestionMark = num => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

// Converts object key/value pairs to SQL
objToSQL = obj => {
  const arr = [];
  for (let key in obj) {
    var value = obj[key];
    if (Object.hasOwnProperty.cal(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
    }
    arr.push(key + '=' + value);
  }
}
  return arr.toString();
}

var orm = {
  // Display all burgers in the db.
  selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },
  // Add a burger to the db.
  insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
  },
  // Set burger devoured status to true.
  updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
  },
  // Delete a burger from the db.
  deleteOne: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
  }
};

// Export the ORM object in module.exports.
module.exports = orm;