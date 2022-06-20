// this variable can be called anything
const express = require("express")
// return value from express - returns my app - CHECK  
const app = express(); 

// add a /static url path to web server (app), when hit (targeted) it will run public folder
// static method looks in the parent folder for folders to serve - so no slashes 
app.use("/static", express.static("public")); 

// app listens to a port 
app.listen(5000, () =>{ 
    console.log("Listening on port 5001")
});

