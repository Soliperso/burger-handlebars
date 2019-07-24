const orm = require("../config/orm.js");
const burger = {

    // Display all burgers in the db.
    selectAll: (cb) => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    // Add a new burger to the db.
    insertOne: (cols, vals, cb)  => {
        orm.insertOne("burgers", cols, vals, res => {
            cb(res);
        });
    },
    // Change the devoured status to true.
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            cb(res);
        });
    },
    // Delete a burger from the db.
    deleteOne: (condition, cb) => {
        orm.deleteOne("burgers", condition, res =>  {
            cb(res);
        });
    }
};


module.exports = burger;