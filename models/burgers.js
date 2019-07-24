const orm = require('../config/orm.js');

var burger = {
  // Diplay all the burgers in the DB
  selectAll: function(cb) {
    orm.selectAll('burgers', res => {
      cb(res);
    });
  },

  // Add a new burger to DB
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, res => {
      cb(res);
    });
  },
  // Change the devoured status to true
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // Delete burger form DB
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }

};

module.exports = burger;
