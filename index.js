const fs = require("fs");
const http = require("http");
const data = require("./Data");
const path = require("path");
const events = require("events");
var eventEmitter = new events.EventEmitter();

// fs.writeFileSync("hi.txt", "this is sample file");

// fs.writeFileSync(
//   "demo.js",
//   `function add(){console.log('this is add function')}`
// );

// console.log("--->", __dirname);
// console.log("--->", __filename);

// http
//   .createServer((req, res) => {
//     res.write("Hello this is the first testing server");
//     res.end();
//   })
//   .listen(8000);

// console.log("Your Node Server is running.....");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(8080);

// fs http buffer core modules of node buffer convert to number format

// const app = require("./app.js");

// console.log(app);
// console.log(app.z());

// console.log("node js start");

// const add = (a, b) => {
//   console.log(a + b);
// };

// add(1, 7);

// console.log("statement 2");

// const setTimeout =
//   (() => {
//     console.log("statement 3");
//   },
//   2000);

// console.log("statement 4");

// const x = 20;

// if (x == 20) {
//   console.log("matched");
// }
// console.log("second");
// console.log("nothing");

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// const array = [2, 3, 3, 4, 3, 5, 5, 6, 3, 3, 6];

// let result = array.filter((item) => {
//   return item === 3;
// });

// console.log(result);

// console.log(process.argv);
// to sotre histor and arguments
// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Wrong credentials");
// }

// functionality to

// const dirpath = path.join(__dirname, "files");
// console.log(dirpath);

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     dirpath + "/hello" + i + ".txt",
//     "a simple file demo creation using path module"
//   );
// }

// fs.readdir(dirpath, (err, files) => {
//   console.log(files);
// });

// fs.readdir(dirpath, (err, files) => {
//   files.forEach((item) => {
//     console.log(item);
//   });
// });

// const dirpath = path.join(__dirname, "crud");
// const filepath = `${dirpath}/demo.txt`;

// fs.writeFileSync(filepath, "this is a simple demo file");
// fs.readFile(filepath, "utf-8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filepath, " and this is addition of an element", (err) => {
//   if (!err) {
//     console.log("working");
//   }
// });

// fs.rename(filepath, `${dirpath}/testing.txt`, (err) => {
//   if (!err) {
//     console.log("File renamed");
//   }
// });

// fs.unlinkSync(`${dirpath}/testing.txt`);

// var myEventHandler = function () {
//   console.log("I hear the scream");
// };

// eventEmitter.on("click", myEventHandler);
// eventEmitter.emit("click");

//event is used to handle the producing and consuming code
