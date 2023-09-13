const express = require('express');
const router = express.Router();

const todo_item = require('../config/schema');


router.post("/",async(req,res)=>{
    var todo = req.body.items;
    await insertItems();
    
    async function insertItems(){
        try{
            var newdate = new Date();
            var data = new todo_item({
                item : todo,
                date : newdate
            });
            await data.save();
        }catch(err){
            console.log(err);
        }
    }
    return res.redirect('/');
});

module.exports = router;