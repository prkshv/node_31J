const fs = require("fs");
const http = require("http");

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

console.log("Your Node Server is running.....");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ username: "hkrow", name: "prksh" }));
    res.end();
  })
  .listen(8080);

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
