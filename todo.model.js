const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo= new Schema (
    {
        todo_desc:
        {
            type: String
        },
        todo_res :
        {
            type: String
        },
        todo_pro:
        {
            type: String
        },
        todo_com:
        {
            type:Boolean
        }
    }
);

module.exports= mongoose.model('Todo',Todo);