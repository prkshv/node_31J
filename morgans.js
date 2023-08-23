const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
// app.use(morgan(":method,:url,:status")); //formats
// tiny token

app.listen(8080, () => {
  console.log("server is running on 8080 port");
});
