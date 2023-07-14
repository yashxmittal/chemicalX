const multer = require("multer");
const fs = require("fs");

const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes("csv")) {
    cb(null, true);
  } else {
    cb("Only csv file upload is allowed!", false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const fileHandler = multer({ storage: storage, fileFilter: csvFilter });
module.exports = fileHandler;