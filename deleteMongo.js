const dbConnection = require("./mongodb");

// const deleteData = async () => {
//   const data = await dbConnection(); //accessing the dbConnection function from different file

//   const result = await data.deleteOne({
//     name: "test1",
//   });

//   //performing any action on mongodb database returns a acknowledgement as boolean value
//   console.log("data Deleted successfully");
//   console.log(result);
// };

const deleteData = async () => {
  const data = await dbConnection(); //accessing the dbConnection function from different file

  const result = await data.deleteMany({
    name: "test3",
  });

  //performing any action on mongodb database returns a acknowledgement as boolean value
  console.log("data Deleted successfully");
  console.log(result);
};

deleteData();
