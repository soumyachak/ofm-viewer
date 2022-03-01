var fs = require("fs");
const path = require("path");
const { AccessParser } = require("accessdb-parser");

const buffer = fs.readFileSync(path.resolve(__dirname, "../Data.accdb"));

if (typeof dbase == "undefined" || dbase == null) {
  dbase = new AccessParser(buffer);
  console.log("Connected");
}

module.exports = dbase;
