const connectMongo = require("./mongodb");
const express = require("express");
const cors = require("cors");
const userModel = require("./user_model");

const app = express();

connectMongo();
app.use(cors());
app.use(express.json());

app.post("/user", (req, res) => {
  const body = req.body;
  console.log(req.body);
  const model = {
    username: body.username,
    password: body.password,
    firstname: body.firstname,
    lastname: body.lastname,
  };
  userModel.create(model);

  res.status(200).json(model);
});

app.get("/user", async (req, res) => {
  const userData = await userModel.find();
  res.status(200).json({ userData });
});

app.listen(8080);
