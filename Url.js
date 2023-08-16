const express = require("express");
const app = express();

// app.get("/:id", (req, res) => {
//   res.send("The id you specified is " + req.params.id);
// });

app.get("/demo/:id([0-9]{5})", (req, res) => {
  res.send("id:" + req.params.id);
});

app.listen(8080);
