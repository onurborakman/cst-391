//Dependencies
const mySqlConnect = require('../../connection/mysql_connect');
//CRUD method to find all users
exports.findAllUsers = (callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`SELECT * FROM users`, (error, result) => {
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
exports.findUser = (id, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`SELECT * FROM users WHERE id = ${id}`, (error, result) => {
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
exports.updateUser = (id, username, email, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`UPDATE users SET username = "${username}", email = "${email}" WHERE id = ${id}`, (error, result) => {
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
exports.deleteUser = (id, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`DELETE FROM users WHERE id = ${id}`, (error, result) => {
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
exports.createUser = (user, callback) => {
    //Acquire connection from the pool
    mySqlConnect.acquire((error, connection) => {
        if(error){
            //Return error if there are any
            callback(error, null);
        }else{
            //Execute query
            connection.query(`INSERT INTO users (username, firstname, lastname, email, password) VALUES ("${user.username}", "${user.firstname}", "${user.lastname}", "${user.email}", "${user.password}")`, (error, result) => {
                //Throw an error if there are any
                if(error) throw error;
                //Release the connection
                connection.release();
                if(result.affectedRows == 1){
                    result = result.insertId;
                }
                //Return the result with no error
                callback(null, result);
            });
        }
    });
}