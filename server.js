const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server started at port no 3000");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Success"))
  .catch((error) => console.log("recived error"));
