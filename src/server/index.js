const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));

console.log(`Your API key is ${process.env.API_KEY}`);

console.log("\x1b[36m%s\x1b[0m", `Running: ${__dirname}`);
console.log("\x1b[36m%s\x1b[0m", `----------------------`);
console.log("");

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("\x1b[34m", `App listening on on port 8080`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
