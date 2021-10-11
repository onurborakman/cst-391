//Dependencies
const express = require("express");
const router = express.Router();
const controller = require("../controllers/note.controller");
//Routes for the note
router
    .get('/all', controller.findAllNotes)
    .get('/:id', controller.findNote)
    .post('/update/:id', controller.updateNote)
    .post('/delete/:id', controller.deleteNote)
    .post('/create', controller.createNote);
//Exporting
module.exports = router;