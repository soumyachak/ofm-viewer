const dbase = require("./db/db");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", require("./routers/router"));
app.listen(8000);
