package com.milestone.project.services.business;

import com.milestone.project.models.Note;
import com.milestone.project.services.data.NoteDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    //Autowiring the dao
    @Autowired
    private NoteDAO noteDAO;
    //Constructor
    public NoteService(NoteDAO noteDAO){
        this.noteDAO = noteDAO;
    }
    //CRUD Methods
    public List<Note> findAll(){
        return noteDAO.findAll();
    }
    public Note findOne(Long id){
        return noteDAO.findById(id).get();
    }
    public void create(Note note){
        noteDAO.save(note);
    }
    public void delete(Long id){
        noteDAO.deleteById(id);
    }
    public void update(Long id, String content){
        Note noteToUpdate = noteDAO.findById(id).get();
        noteToUpdate.setContent(content);
        noteDAO.save(noteToUpdate);
    }
}
