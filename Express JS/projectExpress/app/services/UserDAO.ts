import * as mysql from "mysql";
import * as util from "util";
import {User} from "../models/User";

export class UserDAO{
    private host:string = "";
    private port:number = 3306;
    private username:string = "";
    private password:string = "";
    private schema:string = "milestoneproject";
    private pool = this.initDbConnection();
    //Constructor
    constructor(host:string, port:number, username:string, password:string)
    {
        // Set all class properties
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.pool = this.initDbConnection();
    }
    //CRUD: Method to READ all users
    public findAllUsers(callback: any){
        let users:User[] = [];
        this.pool.getConnection(function(err:any, connection:any){
                //Throwing an error if there are any
                if(err) throw err;
                //Executing the query
                connection.query(
                    'SELECT * FROM users',
                    function(err:any, rows:any, fields:any){
                        connection.release();
                        //Throwing an error if there are any
                        if(err) throw err;
                        //Entering the results to the array
                        for(let i = 0; i < rows.length; i++){
                            users.push(
                                new User(
                                    rows[i].id,
                                    rows[i].username,
                                    rows[i].firstname,
                                    rows[i].lastname,
                                    rows[i].email,
                                    rows[i].password
                                )
                            )
                        }
                        //Returning the result
                        callback(users);
                    }
                )
            });
    }
    //CRUD: Method to READ one user
    public findUser(id:number, callback: any){
        let user:User[] = [];
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('SELECT * FROM users WHERE id=?', [id]);
            //Entering the results to the array
            for(let i = 0; i < result.length; i++){
                user.push(new User(id, result[i].username, result[i].firstname, result[i].lastname, result[i].email, result[i].password));
            }
            //Returning the result
            callback(user);
        });
    }
    //CRUD: Method to CREATE user
    public createUser(user:User, callback:any){
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)', [user.Username, user.Firstname, user.Lastname, user.Email, user.Password]);
            //Returning the result
            if(result.affectedRows != 1){
                callback(-1);
            }else{
                let resultId = result.insertId;
                callback(resultId);
            }
        })
    }
    //CRUD: Method to UPDATE user
    public updateUser(id:number, username:string, email:string, callback:any){
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('UPDATE users SET username=?, email=? WHERE id=?', [username, email, id]);
            //Returning the result
            if(result.changedRows != 0){
                callback(id);
            }else{
                callback(-1);
            }
        })
    }
    //CRUD: Method to DELETE user
    public deleteUser(id:number, callback:any){
        this.pool.getConnection(async function(err: any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('DELETE FROM users WHERE id=?', [id]);
            //Returning the result
            if(result.affectedRows != 0){
                callback(id);
            }else{
                callback(-1);
            }
        });
    }
    //Method to initialize the DB Connection
    private initDbConnection():any{
        return mysql.createPool({host: this.host, port: this.port, user: this.username, password: this.password, database: this.schema, connectionLimit: 10});
    }
}