const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
    item :{
        type:String,
        required:true
    },
    check : {
        type:Boolean,
        default : false
    },
    date:{
        type:Date,
        default : true
    }
});

// create model
const todo_item = new mongoose.model('todo',mySchema);

// export model
module.exports = todo_item;