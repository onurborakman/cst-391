//Dependencies
const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
//Routes for the user
router
    .get('/all', controller.findAllUsers)
    .get('/:id', controller.findUser)
    .post('/update/:id', controller.updateUser)
    .post('/delete/:id', controller.deleteUser)
    .post('/create', controller.createUser);
//Exporting
module.exports = router;