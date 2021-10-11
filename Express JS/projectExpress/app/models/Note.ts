export class Note{
    private id: number = -1;
    private content: string = "";
    private userId: number = -1;
    //Constructor
    constructor(
        id: number,
        content: string,
        userId: number
    ){
        this.id = id;
        this.content = content;
        this.userId = userId;
    }
    //Getters
    get Id():number{
        return this.id;
    }
    get Content():string{
        return this.content;
    }
    get UserId():number{
        return this.userId;
    }
    //Setters
    set Id(id:number){
        this.id = id;
    }
    set Content(content:string){
        this.content = content;
    }
    set UserId(userId:number){
        this.userId = userId;
    }
}