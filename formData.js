const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("form");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());

app.use(express.static("public"));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("recived your request");
});

app.listen(8080);
