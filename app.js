/*
    SETUP
*/
const express = require('express');
var app = express();
PORT = 7999;
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Import routes
const studentRoutes = require('./routes/student_routes.js');
const categoryRoutes = require('./routes/category_routes');
const classRoutes = require('./routes/class_routes');
const professorRoutes = require('./routes/professor_routes');
const registrationRoutes = require('./routes/registration_routes');

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


/*
    ROUTES
*/

app.get('/', function (req, res) {
    res.sendFile("./index.html", { root: __dirname });
});

app.use(studentRoutes);
app.use(categoryRoutes);
app.use(classRoutes);
app.use(professorRoutes);
app.use(registrationRoutes);

/*
    LISTENER
*/
app.listen(PORT, function () {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});



