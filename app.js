/*
    SETUP
*/
// Express
var express = require('express');   // We are using the express library for the web server
var app = express();            // We need to instantiate an express object to interact with the server in our code
PORT = 5287;                 // Set a port number at the top so it's easy to change in the future


/*
    ROUTES
*/

app.get('/', function (req, res) {
    res.sendFile("./index.html", { root: __dirname });
});

// Students

app.get('/students/students', function (req, res) {
    res.sendFile("./students/students.html", { root: __dirname });
});

app.get('/students/edit_students', function (req, res) {
    res.sendFile("./students/edit_students.html", { root: __dirname });
});


// Class

app.get('/classes/classes', function (req, res) {
    res.sendFile("./classes/classes.html", { root: __dirname });
});

app.get('/classes/edit_classes', function (req, res) {
    res.sendFile("./classes/edit_classes.html", { root: __dirname });
});

// class categories

app.get('/class_categories/class_category', function (req, res) {
    res.sendFile("./class_categories/class_category.html", { root: __dirname });
});

app.get('/class_categories/edit_category', function (req, res) {
    res.sendFile("./class_categories/edit_category.html", { root: __dirname });
});

// professors

app.get('/professors/professors', function (req, res) {
    res.sendFile("./professors/professors.html", { root: __dirname });
});

app.get('/professors/edit_professors', function (req, res) {
    res.sendFile("./professors/edit_professors.html", { root: __dirname });
});

// registrations

app.get('/registrations/registrations', function (req, res) {
    res.sendFile("./registrations/registrations.html", { root: __dirname });
});


/*
    LISTENER
*/
app.listen(PORT, function () {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});



