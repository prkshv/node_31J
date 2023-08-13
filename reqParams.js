const express = require("express");
const app = express();
const router = express.Router();
const port = 8000;

app.get("/api/:name/:tagline", (req, res) => {
  console.log("Name:", req.params["name"]);
  console.log("Tagline:", req.params["tagline"]);
  res.send(req.params["name"]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server listening to port number", port);
});