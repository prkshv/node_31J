const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017"; //using localhost:27017 might give error so use 127.0.0.1 instead

const client = new MongoClient(url);
const database = "nodej"; //database name

let dbConnection = async () => {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("userData");
};
module.exports = dbConnection;

// async function getData() {
//   let result = await client.connect();
//   let db = result.db(database);
//   let collection = db.collection("userData"); //collection name
//   let response = await collection.find({name:'currentuser'}).toArray(); //it will return pending if not provided await
//   console.log(response);
// }

// getData();
