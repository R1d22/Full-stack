const path = require("path");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const generalSchema = new Schema({
  category: {
    type: Schema.Types.String,
    unique: true,
  },
});

const modelname = path.basename(__filename, ".js");
const model = mongoose.model(modelname, generalSchema);
module.exports = model;
