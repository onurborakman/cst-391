exports.DTO = (code, message, data) => {
    //Creating a DTO class
    class DTO{
        //Constructor
        constructor(code, message, data){
            this.code = code;
            this.message = message;
            this.data = data;
        }
    }
    //Returning a created DTO from the parameters
    return new DTO(code, message, data);
}