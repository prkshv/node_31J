const express = require("express");
const product = require("./userModel");
require("./config");

const app = express();
app.use(express.json());

// app.post("/create", async (req, res) => {
//   let data = new product(req.body);
//   let result = await data.save();
//   res.send(result);
//   console.log(result);
// });

// app.get("/list", async (req, res) => {
//   let data = await product.find();
//   res.send(data);
//   console.log(data);
// });

// app.delete("/delete/:_id", async (req, res) => {
//   let data = await product.deleteOne(req.params);
//   res.send(data);
//   console.log(data);
// });

// app.put("/update/:_id", async (req, res) => {
//   let data = await product.updateOne(req.params, { $set: req.body });
//   res.send(data);
// });

app.get("/search/:key", async (req, res) => {
  let data = await product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
    ],
  });

  // here $or is used to pass the query string.
  // it includes the regular expresstion value which will be assigned by user input.

  res.send(data);
  console.log(data);
});

app.listen(8080);
