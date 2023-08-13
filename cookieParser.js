const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const router = express.Router();
const port = 8000;

app.use(cookieParser());

app.get("/api", (req, res) => {
  req.cookies.title = "node isnot internal and external command";
  req.cookies.name = "prksh";
  console.log(req.cookies);
  res.send();
});

// app.get("/api/v1/endpoint", (req, res) => {
//   console.log("Endpoint hit:", req.path);
//   res.send(req.path);
// });

app.listen(port, (err) => {
  if (err) {
    console.log("my server error", err);
  }
  console.log("server is running on port", port);
});

// remove cluttering of html code in srver js
// interpolation {}
