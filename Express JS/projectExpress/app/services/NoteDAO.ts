import * as mysql from "mysql";
import * as util from "util";
import {Note} from "../models/Note";

export class NoteDAO{
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
    //CRUD: Method to READ all notes
    public findAllNotes(callback: any){
        let notes:Note[] = [];
        this.pool.getConnection(function(err:any, connection:any){
            //Throwing an error if there are any
            if(err) throw err;
            //Executing the query
            connection.query('SELECT * FROM notes', function(err:any, rows:any, fields:any){
                connection.release();
                if(err) throw err;
                //Pushing the result to an array
                for(let i = 0; i < rows.length; i++){
                    notes.push(new Note(rows[i].id, rows[i].content, rows[i].user_id));
                }
                //Returning the array
                callback(notes);
            });
        });
    }
    //CRUD: Method to READ one note
    public findNote(id:number, callback: any){
        let note:Note[] = [];
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('SELECT * FROM notes WHERE id=?', [id]);
            //Entering the results to the array
            for(let i = 0; i < result.length; i++){
                note.push(new Note(id, result[i].content, result[i].user_id));
            }
            //Returning the array
            callback(note);
        });
    }
    //CRUD: Method to CREATE note
    public createNote(content:string, userId:number, callback:any){
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('INSERT INTO notes (content, user_id) VALUES (?, ?)', [content, userId]);
            //Returning the result
            if(result.affectedRows != 1){
                callback(-1);
            }else{
                let resultId = result.insertId;
                callback(resultId);
            }
        })
    }
    //CRUD: Method to UPDATE note
    public updateNote(id:number, content:string, callback:any){
        this.pool.getConnection(async function(err:any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('UPDATE notes SET content=? WHERE id=?', [content, id]);
            //Returning the result
            if(result.changedRows != 0){
                callback(id);
            }else{
                callback(-1);
            }
        })
    }
    //CRUD: Method to DELETE note
    public deleteNote(id:number, callback:any){
        this.pool.getConnection(async function(err: any, connection:any){
            connection.release();
            //Throwing an error if there are any
            if(err) throw err;
            connection.query = util.promisify(connection.query);
            //Executing the query
            let result = await connection.query('DELETE FROM notes WHERE id=?', [id]);
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