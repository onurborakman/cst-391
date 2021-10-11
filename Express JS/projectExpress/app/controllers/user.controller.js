//Dependencies
const service = require("../services/user.service");
const {DTO} = require('../models/dto.model');
const {User} = require('../models/user.model');
//CRUD method to send all the users as a response in JSON
exports.findAllUsers = (req, res, next) => {
    //Call the DAO
    service.findAllUsers((err, result) => {
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
//CRUD method to send the user found by id as a response in JSON
exports.findUser = (req, res, next) => {
    //Call the DAO
    service.findUser(req.params.id, (err, result) => {
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
//CRUD method to delete the user by id and send the result back in JSON
exports.deleteUser = (req, res, next) => {
    //Call the DAO
    service.deleteUser(req.params.id, (err, result) => {
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
//CRUD method to update the user and send the result back in JSON
exports.updateUser = (req, res, next) => {
    //Call the DAO
    service.updateUser(req.params.id, req.body.username, req.body.email, (err, result) => {
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
//CRUD method to create the user and send the result back in JSON
exports.createUser = (req, res, next) => {
    //Create a user
    let user = User(req.body.username, req.body.firstname, req.body.lastname, req.body.email, req.body.password);
    //Call the DAO
    service.createUser(user, (err, result) => {
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