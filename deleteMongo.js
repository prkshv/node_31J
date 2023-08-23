const dbConnection = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnection(); //accessing the dbConnection function from different file

  const result = await db.deleteOne({
    name: "test1",
  });

  //performing any action on mongodb database returns a acknowledgement as boolean value
  if (result.acknowledged) {
    console.log("data Deleted successfully");
    console.log(result);
  }
};

deleteData();
