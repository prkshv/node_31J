const express = require("express");
const app = express();
const routerDemo = require("./express.router");

//route and callback
// app.get("/", (req, res) => {
//   res.send("something here");
// });

// app.listen(8000);

// app.listen(port,[host],[backlog],[callback])
// port:
// port number on which the server should accept incomming request

// host:
// name of the domain. you need to set it when you deploy your apps to the cloud

// backlog:
// the maximum number of queued pending connections. the default is 511

// callback:
// asynchronous function that is called when the server starts listening for requests.

// http verbs get post put delete

// REPL read evaluate print loop

// app.get("/", (req, res) => {
//   res.send("<h1>Home page using get method</h1>");
// });

// app.post("/test", (req, res) => {
//   res.send("<h1>Testpage using post method</h1>");
// });

// app.get("/", (req, res) => {
//   res.send(
//     "Home page<br><a href='http://localhost:8000/fullstack'>Fullstack Courses</a>"
//   );
// });

// app.use("/fullstack", routerDemo);

// app.listen(8000);

app.get("/", (req, res) => {
  res.send("<h1>This is home page</h1><a href='/about'>about</a>");
});

app.get("/about", (req, res) => {
  res.send(
    `<input type='text' placeholder='your name' value="${req.query.name}" /><button>Enter</button>`
  );
});
// to run it enter ?name=something in url
// name can be any keyword

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Test 1",
      email: "test1@gmail.com",
    },
    {
      name: "Test 2",
      email: "test2@gmail.com",
    },
    {
      name: "Test 3",
      email: "test3@gmail.com",
    },
  ]);
});

app.get("/*", (req, res) => {
  res.send("<h2>page not found</h2><a href='/'>Home page</a>");
});

app.listen(8000);
