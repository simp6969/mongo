const connectMongo = require("./mongodb");
const express = require("express");
const cors = require("cors");
const userModel = require("./user_model");

const app = express();

connectMongo();
app.use(cors());
app.use(express.json());

app.get("/question", async (req, res) => {
  const question = await userModel.QuestionModel.find();
  res.json({ question });
});

app.get("/user", async (req, res) => {
  const userData = await userModel.UserModel.find();
  res.status(200).json({ userData });
});

app.post("/user", (req, res) => {
  const body = req.body;
  console.log(req.body);
  const model = {
    username: body.username,
    password: body.password,
    firstname: body.firstname,
    lastname: body.lastname,
  };
  userModel.UserModel.create(model);
  res.status(200).json(model);
});

app.post("/question", (req, res) => {
  const model = {
    question: req.body.question,
    answer: req.body.answer,
    author: req.body.author,
  };
  userModel.QuestionModel.create(model);
  res.json(model);
});

app.listen(8080);
/// pexels api key: l4Q7GJi013Fv6TaOspwwyFJqTF7YImRQEweH3RUYDhCg0WlAC5EiLB0j
