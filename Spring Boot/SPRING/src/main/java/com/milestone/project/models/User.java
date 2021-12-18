package com.milestone.project.models;

import com.google.gson.JsonObject;

import javax.persistence.*;
//JPA ENTITY
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @Column(name = "username", unique = true)
    private String username;
    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    //Default constructor
    public User(){}
    //Constructor
    public User(
            String username,
            String firstname,
            String lastname,
            String email,
            String password
    ){
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    //Getters
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
    //Setters
    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    //toString with JSON
    @Override
    public String toString() {
        JsonObject json = new JsonObject();
        json.addProperty("id", this.getId());
        json.addProperty("username", this.getUsername());
        json.addProperty("firstname", this.getFirstname());
        json.addProperty("lastname", this.getLastname());
        json.addProperty("email", this.getEmail());
        json.addProperty("password", this.getPassword());
        return json.toString();
    }
}
