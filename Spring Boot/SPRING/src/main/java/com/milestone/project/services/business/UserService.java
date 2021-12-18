package com.milestone.project.services.business;

import com.milestone.project.models.User;
import com.milestone.project.services.data.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    //Autowiring the dao
    @Autowired
    private UserDAO userDAO;
    //Constructor
    public UserService(UserDAO userDAO){
        this.userDAO = userDAO;
    }
    //CRUD Methods
    public List<User> findAll(){
        return userDAO.findAll();
    }
    public User findOne(Long id){
        return userDAO.findById(id).get();
    }
    public void create(User user){
        userDAO.save(user);
    }
    public void delete(Long id){
        userDAO.deleteById(id);
    }
    public void update(Long id, String email, String username){
        User userToUpdate = userDAO.findById(id).get();
        userToUpdate.setUsername(username);
        userToUpdate.setEmail(email);
        userDAO.save(userToUpdate);
    }
}
