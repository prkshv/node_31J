const express = require("express");
const dbConnection = require("./mongodb");
const mongodb = require("mongodb");

const app = express();

app.use(express.json()); //important to use this middleware to tell the program that we are using the json format for our data

app.get("/", async (req, res) => {
  let data = await dbConnection();
  let result = await data.find().toArray();
  console.log(result);
  res.send(result);
});

app.post("/", async (req, res) => {
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  res.send(req.body);
  console.log("data inserted to database");
});

app.put("/:name", async (req, res) => {
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  console.log("data updated successfully");
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await dbConnection();
  let result = await data.deleteOne(
    {_id: new mongodb.ObjectId(req.params.id)}
    );
  res.send(result);
});

app.listen(8080);
