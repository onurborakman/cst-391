package com.milestone.project.models;

import com.google.gson.*;

public class DTO<T>{

    private int responseCode;
    private String responseMessage;
    private T data;
    private Gson gson = new Gson();
    //Constructor
    public DTO(int responseCode, String responseMessage, T data){
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.data = data;
    }
    //Getters
    public int getResponseCode() {
        return responseCode;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public T getData() {
        return data;
    }
    //Function to JSON SERIALIZE
    private JsonObject serialize(){
        JsonObject total = new JsonObject();
        JsonObject code = new JsonObject();
        code.addProperty("Error Code", this.getResponseCode());
        JsonObject message = new JsonObject();
        message.addProperty("Error Message", this.getResponseMessage());
        JsonObject data = new JsonObject();
        data.addProperty("Data", this.getData().toString());
        total.add("Error Code", code);
        total.add("Error Message", message);
        total.add("Data", data);
        return total;
    }
    //Using the serializer on override of toString
    @Override
    public String toString() {
        return this.serialize().toString();
    }
}
