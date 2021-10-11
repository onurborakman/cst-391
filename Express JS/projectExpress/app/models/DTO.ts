export class DTO{
    private resCode: number = -1;
    private resMessage: string = "";
    private data: any;
    //Constructor
    constructor(
        resCode: number,
        resMessage: string,
        data: any
    ){
        this.resCode = resCode;
        this.resMessage = resMessage;
        this.data = data;
    }
    //Getters
    get ResCode():number{
        return this.resCode;
    }
    get ResMessage():string{
        return this.resMessage;
    }
    get Data():any{
        return this.data;
    }
    //Setters
    set ResCode(resCode:number){
        this.resCode = resCode;
    }
    set ResMessage(resMessage:string){
        this.resMessage = resMessage;
    }
    set Data(data:any){
        this.data = data;
    }
}