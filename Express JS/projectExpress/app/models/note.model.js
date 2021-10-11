exports.Note = (content, userId) => {
    //Creating Note class
    class Note{
        //Constructor
        constructor(content, userId){
            this.content = content;
            this.userId = userId;
        }
    }
    //Returning a created Note from the parameters
    return new Note(content, userId)
}