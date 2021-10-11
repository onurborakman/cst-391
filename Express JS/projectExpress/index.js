//Dependencies
const express = require('express');
const mySqlConnect = require("./connection/mysql_connect");
const app = express();
const noteRoutes = require('./app/routes/note.route');
const userRoutes = require('./app/routes/user.route');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//Initialize the DB Connection
mySqlConnect.init();
//Initialize the routes
app.use('/note', noteRoutes);
app.use('/user', userRoutes);
//Listen to the port
app.listen(port, () => {
    console.log(`Listening Port ${port}...`);
})