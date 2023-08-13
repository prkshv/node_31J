const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/first_template", (req, res) => {
  res.render("first_view");
});

app.get("/dynamic_view", (req, res) => {
  res.render("dynamic", {
    name: "google",
    url: "https://www.google.co.in/",
  });
});

app.get("/myhome", (req, res) => {
  res.render("myhome", {
    name: "Prksh",
    url: "http://localhost:8000/myview",
  });
});

app.get("/myview", (req, res) => {
  res.render("myview", {
    home: "http://localhost:8000/myhome",
  });
});

app.get("/conditional", (req, res) => {
  res.render(
    "conditional",
    (user = { name: "Testing", age: "30", login: true })
  );
});

app.listen(8000);
