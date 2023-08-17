const { error } = require("console");
const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "upload");
//       console.log("File Destination:", "upload");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".webp");
//       console.log("File Name:", file.fieldname + "-" + Date.now() + ".webp");
//     },
//   }),
// }).single("user_file");

//multiple image extension and the filesize

const fileStorage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImage = multer({
  storage: fileStorage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // we can use split instaed of match
    if (!file.originalname.match(/\.(png|jpg|webp)$/)) {
      return cb(new Error("format mismatch"));
    }
    cb(undefined, true);
  },
}).single("user_file");

app.post(
  "/upload",
  uploadImage,
  (req, res) => {
    res.send(req.file);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.listen(8080);
