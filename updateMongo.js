const dbConnection = require("./mongodb");

const updateData = async () => {
  const db = await dbConnection(); //accessing the dbConnection function from different file

  // const result = await db.updateOne(
  //   {
  //     name: "test1",
  //   },
  //   {
  //     $set: {
  //       // name: "test1",
  //       phone: 10920192,
  //     },
  //   }
  // );

  // const result = await db.updateMany(
  //   {},
  //   {
  //     $set: {
  //       location: "India",
  //     },
  //   }
  // );

  // $set inc min max
  // $inc increment the existing value by given value
  
  // update operators
  // $set $inc $ $ $

  const result = await db.updateMany(
    {
      salary: 7500,
    },
    {
      $inc: {
        salary: 500,
      },
    }
  );

  //performing any action on mongodb database returns a acknowledgement as boolean value
  if (result.acknowledged) {
    console.log("data Updated successfully");
    console.log(result);
  }
};

updateData();
