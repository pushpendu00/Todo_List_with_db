const mongoose = require("mongoose");
var db;
connectMongo();

async function connectMongo() {
  try{
    // const url = process.env.db_link;
    db = await mongoose.connect("mongodb://127.0.0.1:27017/TODO");
      if(db){
        console.log("MongoDB Successfully Connected.......");
      }
      else{
        return;
      }
  }catch(err){
    console.log(err);
  }
}

module.exports = db;
