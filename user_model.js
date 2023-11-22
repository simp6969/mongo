const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});
const QuestionSchema = new Schema({
  question: String,
  answer: String,
  author: String,
});

const QuestionModel = model("question", QuestionSchema);
const UserModel = model("users", UserSchema);

module.exports = { UserModel, QuestionModel };
