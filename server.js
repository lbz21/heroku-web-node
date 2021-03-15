const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const { Schema } = mongoose;
path = require('path');
const http = require("http") 
const port = process.env.PORT;
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://JR-Lyubo:DBtest@cluster1.rvoj8.mongodb.net/detailsDB", { useNewUrlParser: true }, 
{ useUnifiedTopology: true } )

//creating a data model to send to my MongoDB atlas cluster. This is a form document
const notesSchema = {

 Name: String,
 Surname: String,
 Address: String,
 Email: String,
 Comment: String


}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

//the app post method used to perform any CRUD operations, and also a post method
app.post("/", function(req, res){
    let newNote = new Note({
        Name: req.body.title,
        Surname: req.body.Surname,
        Address: req.body.Address,
        Email: req.body.email,
        Comment: req.body.comment
    });
    newNote.save();

    console.log("The New data has been added succesfuly")

    


    res.redirect('/'); //refreshes the localhost page back to the route
})




app.listen(port, function() {
    console.log("This server will be running on 3000")
})
