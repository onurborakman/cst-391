export class User{
    private id: number = -1;
    private username: string = "";
    private firstname: string = "";
    private lastname: string = "";
    private email: string = "";
    private password: string = "";
    //Constructor
    constructor(
        id: number,
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        password: string
    ){
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    //Getters
    get Id():number{
        return this.id;
    }
    get Username():string{
        return this.username;
    }
    get Firstname():string{
        return this.firstname;
    }
    get Lastname():string{
        return this.lastname;
    }
    get Email():string{
        return this.email;
    }
    get Password():string{
        return this.password;
    }
    //Setters
    set Id(id:number){
        this.id = id;
    }
    set Username(username:string){
        this.username = username;
    }
    set Firstname(firstname:string){
        this.firstname = firstname;
    }
    set Lastname(lastname:string){
        this.lastname = lastname;
    }
    set Email(email:string){
        this.email = email;
    }
    set Password(password:string){
        this.password = password;
    }
}