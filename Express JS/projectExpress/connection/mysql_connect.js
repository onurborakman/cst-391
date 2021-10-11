//Dependencies
const mysql = require('mysql');  
const dbConfig = require('../config/db.config');
//Function to connect to the MySQL
function MySQLConnect() {  
  
  this.pool = null;  
  //Function to initialize the connection with given info on db.config
  this.init = function() {  
    let conn = {  
      connectionLimit: dbConfig.poolSize,  
      host     : dbConfig.host,  
      port: dbConfig.port,
      user     : dbConfig.user,  
      password : dbConfig.password,  
      database: dbConfig.database,
    };
    //Create a pool
    this.pool = mysql.createPool(conn);  
  };  
  //Create acquire function
  this.acquire = function(callback) {  
    //Retrieve the connection
    this.pool.getConnection(function(err, connection) {  
      callback(err, connection);  
    });  
  
  };  
  
}  
//Export the function
module.exports = new MySQLConnect();