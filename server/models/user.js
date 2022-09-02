const mongoose = require("mongoose");

const { Schema } = mongoose;

const generalSchema = new Schema({
  // пример схемы

  name: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
  },
  role: {
    type: Schema.Types.String,
    // default: "USER",
  },
});

const model = mongoose.model("user", generalSchema); // создаем модель (['название модели' = название файла], [сама схема])
module.exports = model;
