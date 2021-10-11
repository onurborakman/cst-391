//Dependencies
const service = require("../services/note.service");
const {DTO} = require('../models/dto.model');
const {Note} = require('../models/note.model');
//CRUD method to send all the notes as a response in JSON
exports.findAllNotes = (req, res, next) => {
    //Call the DAO
    service.findAllNotes((err, result) => {
        if(err){
            //Return error as DTO
            let dto = DTO(400, "Failed", err);
            return res.json(dto)
        }
        //Return result as DTO
        let dto = DTO(200, "Successful", result);
        return res.json(dto); 
    });
};
//CRUD method to send the note found by id as a response in JSON
exports.findNote = (req, res, next) => {
    //Call the DAO
    service.findNote(req.params.id, (err, result) => {
        if(err){
            //Return error as DTO
            let dto = DTO(400, "Failed", err);
            return res.json(dto)
        }
        //Return result as DTO
        let dto = DTO(200, "Successful", result);
        return res.json(dto); 
    });
};
//CRUD method to delete the note by id and send the result back in JSON
exports.deleteNote = (req, res, next) => {
    //Call the DAO
    service.deleteNote(req.params.id, (err, result) => {
        if(err){
            //Return error as DTO
            let dto = DTO(400, "Failed", err);
            return res.json(dto)
        }
        //Return result as DTO
        let dto = DTO(200, "Successful", result);
        return res.json(dto); 
    });
};
//CRUD method to update the note and send the result back in JSON
exports.updateNote = (req, res, next) => {
    //Call the DAO
    service.updateNote(req.params.id, req.body.content, (err, result) => {
        if(err){
            //Return error as DTO
            let dto = DTO(400, "Failed", err);
            return res.json(dto)
        }
        //Return result as DTO
        let dto = DTO(200, "Successful", result);
        return res.json(dto); 
    });
};
//CRUD method to create the note and send the result back in JSON
exports.createNote = (req, res, next) => {
    //Create a note
    let note = Note(req.body.content, req.body.userId);
    //Call the DAO
    service.createNote(note, (err, result) => {
        if(err){
            //Return error as DTO
            let dto = DTO(400, "Failed", err);
            return res.json(dto)
        }
        //Return result as DTO
        let dto = DTO(200, "Successful", result);
        return res.json(dto); 
    });
};