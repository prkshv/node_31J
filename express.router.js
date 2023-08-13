const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("These are full stack courses");
  res.send(
    "These are available full stack courses<br><a href='http://localhost:8000/fullstack/react'>React Course</a><br><a href='http://localhost:8000/fullstack/angular'>Angular Course</a>"
  );
});
router.get("/react", (req, res) => {
  res.send("React Course");
});
router.get("/angular", (req, res) => {
  res.send("Angular Course");
});
router.post("/", (req, res) => {
  res.send("post router from the another file");
});

module.exports = router;
