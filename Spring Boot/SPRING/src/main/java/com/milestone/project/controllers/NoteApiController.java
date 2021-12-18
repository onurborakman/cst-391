package com.milestone.project.controllers;

import com.milestone.project.models.DTO;
import com.milestone.project.models.Note;
import com.milestone.project.services.business.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//Controller for Note APIs
@RestController
@RequestMapping(value = "/note")
public class NoteApiController {
    //Implemented Note Service in order to be able to retrieve or send data
    private final NoteService noteService;
    //Constructor
    @Autowired
    public NoteApiController(NoteService noteService){
        this.noteService = noteService;
    }
    //Path to retrieve all available Notes
    @GetMapping(path = "/all")
    public DTO<Note> readAll(){
        //Calling the Note Service to find all the available notes
        //And creating a DTO to send it as a message
        DTO<Note> dto = new DTO(200, "Notes Retrieved", (noteService.findAll()));
        return dto;
    }
    //Path to retrieve only one note by id
    @GetMapping(path = "/{id}")
    public DTO<Note> readOne(@PathVariable(name = "id") Long id) {
        //Calling the Note Service to find the note by id
        //And creating a DTO to send it as a message
        DTO<Note> dto = new DTO(200, "Note Retrieved", (noteService.findOne(id)));
        return dto;
    }
    //Path to update the note with the parameters
    @CrossOrigin
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    @ResponseBody
    public DTO<Note> update(
            @RequestBody Note data
    ){
        //Calling the Note Service to update the note
        noteService.update(data.getId(), data.getContent());
        //Sending back a message with the updated note's id
        DTO<Note> dto = new DTO(200, "Note Updated", data.getId());
        return dto;
    }
    //Path to delete a note by id
    @GetMapping(path = "/delete/{id}")
    public DTO<Note> delete(@PathVariable("id") Long id){
        //Calling Note Service to delete the note by id
        noteService.delete(id);
        //Sending back a message with the deleted note's id
        DTO<Note> dto = new DTO(200, "Note Deleted", id);
        return dto;
    }
    //Path to create a note with the passed parameters
    @CrossOrigin
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public DTO<Note> create(
            @RequestBody Note data
    ){
        //Create a new note with given parameters
        Note note = new Note(data.getContent(), data.getUserId());
        //Calling the Note Service and passing the new Note to be created
        noteService.create(note);
        //Sending back a message with the created note's information
        DTO<Note> dto = new DTO(200, "Note Created", note);
        return dto;
    }
}
