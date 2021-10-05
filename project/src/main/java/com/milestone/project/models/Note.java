package com.milestone.project.models;

import com.google.gson.JsonObject;

import javax.persistence.*;
//JPA ENTITY
@Entity
@Table(name = "notes")
public class Note {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @Column(name = "content", nullable = false)
    private String content;
    @Column(name = "user_id", nullable = false)
    private Long userId;
    //Default Constructor
    public Note(){}
    //Constructor
    public Note(
            String content,
            Long userId
    ){
        this.content = content;
        this.userId = userId;
    }
    //Getters
    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public Long getUserId() {
        return userId;
    }
    //Setters
    public void setContent(String content) {
        this.content = content;
    }
    //toString with JSON
    @Override
    public String toString() {
        JsonObject json = new JsonObject();
        json.addProperty("id", this.getId());
        json.addProperty("content", this.getContent());
        json.addProperty("userId", this.getUserId());
        return json.toString();
    }
}
