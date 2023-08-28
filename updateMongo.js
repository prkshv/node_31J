const { ObjectId } = require("mongodb");
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
  // $set $inc $ $

  // const result = await db.updateMany(
  //   {
  //     salary: 7500,
  //   },
  //   {
  //     $inc: {
  //       salary: 500,
  //     },
  //   }
  // );

  const result = await db.updateMany(
    {
      _id: new ObjectId("64e2f0110165f109e8ddf70a"), //need to use new keyword along with objectId to be able to perform tasks using id
    },
    {
      $set: {
        name: "newone",
        email: "newone@gmail.com",
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
