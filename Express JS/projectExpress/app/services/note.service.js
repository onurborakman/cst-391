//Dependencies
const mySqlConnect = require('../../connection/mysql_connect');
const Note = require('../models/note.model');
//CRUD method to find all notes
exports.findAllNotes = (callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`SELECT * FROM notes`, (error, result) => {
                //Throw an error if there are any
                if(error) throw error;
                //Release the connection
                connection.release();
                //Return the result with no error
                callback(null, result);
            });
        }
    });
}
//CRUD method to find one note by id
exports.findNote = (id, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`SELECT * FROM notes WHERE id = ${id}`, (error, result) => {
                //Throw an error if there are any
                if(error) throw error;
                //Release the connection
                connection.release();
                //Return the result with no error
                callback(null, result);
            });
        }
    });
};
//CRUD method to update note by id
exports.updateNote = (id, content, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`UPDATE notes SET content = "${content}" WHERE id = ${id}`, (error, result) => {
                //Throw an error if there are any
                if(error) throw error;
                //Release the connection
                connection.release();
                if(result.affectedRows == 1){
                    result = id;
                }
                //Return the result with no error
                callback(null, result);
            });
        }
    });
};
//CRUD method to update note by id
exports.deleteNote = (id, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`DELETE FROM notes WHERE id = ${id}`, (error, result) => {
                //Throw an error if there are any
                if(error) throw error;
                connection.release();
                if(result.affectedRows == 1){
                    result = id;
                }
                //Return the result with no error
                callback(null, result);
            });
        }
    });
};
//CRUD method to create a note
exports.createNote = (note, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`INSERT INTO notes (content, user_id) VALUES ("${note.content}", ${note.userId})`, (error, result) => {
                //Throw an error if there are any
                if(error) throw error;
                connection.release();
                //Return the result with no error
                if(result.affectedRows == 1){
                    result = result.insertId;
                }
                callback(null, result);
            });
        }
    });
};