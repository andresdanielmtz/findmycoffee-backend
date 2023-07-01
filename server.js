const express = require("express");
const app = express();

console.log(":)");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("here");
  // res.download("./server.js");
  // res.status(500).json( { message: "Error" } ); // send a JSON response
  res.render("index", { text91231: "World" });
});

app.get("/users", (req, res) => {


  
});

app.get("/users/new", (req, res) => {



});

app.listen(3000); // port 3000
