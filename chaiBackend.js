require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
// console.log(process.env);

app.get("/", (req, res) => {
  res.send("hello World");
});
app.get("/twitter", (req, res) => {
  res.send("You are on twitter page.");
});
app.listen(process.env.PORT, () => {
  console.log(`The app is listened on port ${port}.`);
});
