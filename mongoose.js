const mongoose = require("mongoose");

date = new Date();

mongoose.connect("mongodb://127.0.0.1:27017/nodej");

const productSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  date: Date,
});

// const main = async () => {
//   const ProductModel = mongoose.model("userdatas", productSchema);

//   let data = new ProductModel({
//     name: "Validate",
//     phone: 12309845678,
//     date: date,
//   });

//   let result = await data.save();
//   console.log(result);
// };

// main();

// const updateDb = async () => {
//   const product = mongoose.model("userdatas", productSchema);
//   let data = await product.updateOne(
//     { name: "Validate" },
//     {
//       $set: {
//         phone: 2222222,
//       },
//     }
//   );
// console.log("Data updated successfully....");
//   console.log(data);
// };

// updateDb();

// const deleteDB = async () => {
//   const product = mongoose.model("userdatas", productSchema);
//   let data = await product.deleteOne({ name: "Validate" });
//   console.log("Data deleted successfully....");
//   console.log(data);
// };

// deleteDB();

// const findDb = async () => {
//   const product = mongoose.model("userdatas", productSchema);
//   let data = await product.find();
//   console.log(data);
// };

// findDb();
