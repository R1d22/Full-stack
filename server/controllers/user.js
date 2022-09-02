require("../runners/db");
const categoryModel = require("../models/user.js");

const createNewUser = async (name, email, password) => {
  try {
    const userDoc = await new categoryModel({ name, email, password }).save();
    console.log(userDoc);
    // const { id } = categoryDoc;
    // const info = await categoryModel.find({});
    // // console.log(info)
    // const categoryNames = info.map((el) => el.category);
    // console.log('Controller:', genreNames)
    return {
      status: "ok",
    };
  } catch (err) {
    return { status: "dublicate_category" };
  }
};

module.exports = {
  createNewUser,
};
