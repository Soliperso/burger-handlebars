// Dependencies
const express = require("express");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
});