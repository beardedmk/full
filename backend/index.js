const express = require("express");
const userModel = require("./dataBase/User");

const app = express();

app.post("login", (req, res) => {});

app.post("/signup", async (req, res) => {
  const nwUser = new userModel(req.body);
  let result = await nwUser.save();
  result = result.toObject();

  res.send(result);
});

app.listen(4000, console.log("Server Running at port 4000"));
