const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const note = require("./routes/NoteRoutes")


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
const DB_CONNECTION_STRING = "mongodb+srv://admin:829682@cluster0.mznpgmx.mongodb.net/comp3123?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/list", note)

app.route('/') 
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })
    


app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});