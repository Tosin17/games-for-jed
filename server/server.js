const express = require("express");
const app = express();
const path = require("path");
const appPath = "../dist/fict-consultancy";

app
  .use("/", express.static(path.join(__dirname, appPath)))
  .listen(process.env.PORT || 5000, () => console.log("Listening on 5000"));
