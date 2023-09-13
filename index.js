const express = require("express");
const dotenv = require('dotenv');
const app = express();

const port = 4000;

const db = require("./config/mongoose");
var todo_item = require("./config/schema");
// const todo_item = require('./config/schema');

// set views ingine
app.set("view engine", "ejs");
app.set("views", "./views");

// for direct using css,image and js folder
app.use(express.static("./assets"));

app.use(express.urlencoded({ extended: true }));

// app.use('/',require('./routes/index'));
app.get("/", async (req, res) => {
  var items = [];
  await readAllItems();
  async function readAllItems() {
    try {
      // console.log("fetching data 1.....");
      items = await todo_item.find({});
    } catch (err) {
      console.log(err);
      return;
    }
  }
  // console.log(items);
  items = items.reverse();
  return res.render("index", {
    items: items,
  });
});

app.use("/add", require("./routes/todo"));

app.put("/:id", async (req, res) => {
  var id = req.params.id;
  await checkItems();
  async function checkItems() {
    // console.log("checked",id);
    var data = await todo_item.findById(id);
    // console.log(data);
    var check = true;
    if (data.check == check) {
      check = false;
    }
    try {
      console.log(check);
      await todo_item.findByIdAndUpdate(id, {
        check: check,
      });
    } catch (err) {
      console.log(err);
    }
  }
  // return res.redirect('/');
});

app.delete("/:id", async (req, res) => {
  // console.log("inside delete method");
  var id = req.params.id;
  await checkItems();
  async function checkItems() {
    try {
      // console.log(id);
      var itm = await todo_item.findByIdAndDelete(id);
      // console.log(itm);
    } catch (err) {
      console.log(err);
    }
  }
  return res.redirect("/");
});

app.listen(port, (err) => {
  if (err) {
    console.log("ERR = ", err);
    return;
  }
  console.log(`server is running on port : ${port}`);
});
