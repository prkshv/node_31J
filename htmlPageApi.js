const express = require("express");

const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");
console.log(publicPath);

// app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/Home.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/About.html`);
});
app.get("/contact", (req, res) => {
  res.sendFile(`${publicPath}/Contact.html`);
});

app.listen(5000);
