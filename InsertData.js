const dbConnection = require("./mongodb");

const insert = async () => {
  const db = await dbConnection(); //accessing the dbConnection function from different file

  //   INSERT DATA

  const result = await db.insertMany([
    {
      name: "test1",
      email: "test1@gmail.com",
      phone: "0000000000",
    },
    {
      name: "test3",
      email: "test3@gmail.com",
      phone: "2222222222",
    },
  ]);

  //performing any action on mongodb database returns a acknowledgement as boolean value
  if (result.acknowledged) {
    console.log("data inserted successfully");
  }
};

insert();
