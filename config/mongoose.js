const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo_db");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "There was an error in connecting the server to the database"));
db.once("open", function(){
    console.log("The server is successfully connected to the database.");
})

