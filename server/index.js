require("dotenv").config();
const { createNewCategory } = require("./controllers/category.js");
const { createNewUser } = require("./controllers/user.js");
// const mongoose = require("mongoose");
const express = require("express");
const init = require("./runners/db");
const PORT = process.env.PORT || 5000;

const app = express();

const items = [
  { id: 1, item: "phone" },
  { id: 2, item: "computer" },
];

const start = async () => {
  createNewCategory();
  try {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
    await init();
  } catch (err) {
    console.log(err);
  }
};

app.get("/api/items", (req, res) => {
  res.json({
    items,
  });
});
app.post("/api/db/user", (req, res) => {
  console.log(req);
  res.send("asd");
});

start();
