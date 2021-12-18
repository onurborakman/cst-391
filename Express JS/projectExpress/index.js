//Application Dependencies
const bodyParser = require('body-parser');
const {User} = require('./lib/app/models/User.js');
const {DTO} = require('./lib/app/models/DTO.js');
const {Note} = require('./lib/app/models/Note.js');
const {NoteDAO} = require('./lib/app/services/NoteDAO.js');
const {UserDAO} = require('./lib/app/services/UserDAO.js');
//Creating an instance of an Express Application
const express = require('express');
const app = express();
const port = 4200;
//CORS
const cors = require('cors');
app.use(cors())
//Database Configuration
const dbHost = "localhost";
const dbPort = 3306;
const dbUsername = "root";
const dbPassword = "root";
//JSON Body Parser
app.use(bodyParser.json());
/***********ROUTES***********/
//Default Route
app.get('/', (req, res) => {
    res.send("Default");
})
/*
**********USER ROUTES**********
*/
//Route to find all users
app.get('/user/all', (req, res) => {
    //Creating the dao
    let service = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to find all the users
    service.findAllUsers(function(users){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "Users Retrieved", users);
        //Responding back with a response of DTO
        res.json(dto);
    });
});
//Route to find a user
app.get('/user/:id', (req, res) => {
    //Creating the dao
    let service = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling to dao to find the user by id
    service.findUser(req.params.id, function(user){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "User Retrieved", user);
        //Responding back with response of DTO
        res.json(dto);
    });
});
//Route to update a user
app.post('/user/update/:id', (req, res) => {
    //Creating the dao
    let service = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to update the user
    service.updateUser(req.params.id, req.body.username, req.body.email, function(result){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "User Updated", result);
        //Responding back with response of DTO
        res.json(dto);
    });
});
//Route to delete a user
app.post('/user/delete/:id', (req, res) => {
    //Creating the dao
    let service = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to delete the user by id
    service.deleteUser(req.params.id, function(result){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "User Deleted", result);
        //Responding back with response of DTO
        res.json(dto);
    });
});
//Route to create a user
app.post('/user/create', (req, res) => {
    //Creating the dao
    let service = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Creating a new user
    let user = new User(
        -1,
        req.body.username,
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password
    );
    //Passing the new user to the dao
    service.createUser(user, function(result){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "User Created", result);
        //Responding back with response of DTO
        res.json(dto);
    });
});
/*
**********NOTE ROUTES**********
*/
//Route to get all notes
app.get('/note/all', (req, res) => {
    //Creating the dao
    let service = new NoteDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to find all the notes
    service.findAllNotes(function(notes){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "Notes Retrieved", notes);
        //Responding back with response of DTO
        res.json(dto);
    })
});
//route to find a note
app.get('/note/:id', (req, res) => {
    //Creating the dao
    let service = new NoteDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to find the note
    service.findNote(req.params.id, function(note){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "Note Retrieved", note);
        //Responding back with response of DTO
        res.json(dto);
    })
});
//Route to update a note
app.post('/note/update/:id', (req, res) => {
    //Creating the dao
    let service = new NoteDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to update the note
    service.updateNote(req.params.id, req.body.content, function(result){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "Updated Note", result);
        //Responding back with response of DTO
        res.json(dto);
    })
});
//Route to delete a note
app.post('/note/delete/:id', (req, res) => {
    //Creating the dao
    let service = new NoteDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to delete the note
    service.deleteNote(req.params.id, function(result){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "Note Deleted", result);
        //Responding back with response of DTO
        res.json(dto);
    })
});
//Route to create a note
app.post('/note/create', (req, res) => {
    //Creating the dao
    let service = new NoteDAO(dbHost, dbPort, dbUsername, dbPassword);
    //Calling the dao to create the note
    service.createNote(req.body.content, req.body.userId, function(result){
        //Creating a DTO with the retrieved data and a message for the user
        let dto = new DTO(200, "Note Created", result);
        //Responding back with response of DTO
        res.json(dto);
    })
});
//Listening to the port
app.listen(port, () => {
    console.log(`Listening to the port: ${port}...`);
});