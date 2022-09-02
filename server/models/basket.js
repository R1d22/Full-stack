const mongoose = require("mongoose");

const { Schema } = mongoose;

const generalSchema = new Schema({
  // пример схемы

  user_id: {
    type: Schema.Types.String,
    unique: true,
  },
});

const model = mongoose.model("basket", generalSchema); // создаем модель (['название модели' = название файла], [сама схема])
module.exports = model;
