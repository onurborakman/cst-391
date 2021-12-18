package com.milestone.project.controllers;

import com.milestone.project.models.DTO;
import com.milestone.project.models.User;
import com.milestone.project.services.business.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//Controller for User APIs
@RestController
@RequestMapping(value = "/user")
public class UserApiController {
    //Implemented User Service in order to be able to retrieve or send data
    private final UserService userService;
    //Constructor
    @Autowired
    public UserApiController(UserService userService){
        this.userService = userService;
    }
    //Path to retrieve all available Users
    @GetMapping(path = "/all")
    public DTO<User> readAll(){
        //Calling the User Service to find all the available users
        //And creating a DTO to send it as a message
        DTO<User> dto = new DTO(200, "Users Retrieved", (userService.findAll()));
        return dto;
    }
    //Path to retrieve only one user by id
    @GetMapping(path = "/{id}")
    public DTO<User> readOne(@PathVariable(name = "id") Long id) {
        //Calling the User Service to find the user by id
        //And creating a DTO to send it as a message
        DTO<User> dto = new DTO(200, "User Retrieved", (userService.findOne(id)));
        return dto;
    }
    //Path to update the user with the parameters
    @PostMapping(path = "/update/{id}")
    public DTO<User> update(
            @PathVariable(name = "id")Long id,
            @RequestParam String username,
            @RequestParam String email
    ){
        //Calling the User Service to update the user
        userService.update(id, username, email);
        //Sending back a message with the updated user's id
        DTO<User> dto = new DTO(200, "User Updated", id);
        return dto;
    }
    //Path to delete a user by id
    @PostMapping(path = "/delete/{id}")
    public DTO<User> delete(@PathVariable(name = "id") Long id){
        //Calling Note Service to delete the note by id
        userService.delete(id);
        //Sending back a message with the deleted user's id
        DTO<User> dto = new DTO(200, "User Deleted", id);
        return dto;
    }
    //Path to create a user with the passed parameters
    @CrossOrigin
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public DTO<User> create(
            @RequestBody User body
    ){
        //Create a new user with given parameters
        User user = new User(body.getUsername(), body.getFirstname(), body.getLastname(), body.getEmail(), body.getPassword());
        //Calling the User Service and passing the new user to be created
        userService.create(user);
        //Sending back a message with the created user's information
        DTO<User> dto = new DTO(200, "User Created", user);
        return dto;
    }
}
