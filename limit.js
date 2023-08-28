const dbConnection = require("./mongodb");

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnection();
  let result = await data.find({}, { Emp_id: 30 }).limit(2);
  res.send(result);
});

app.listen(8080);
