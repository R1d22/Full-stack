require("../runners/db");
const categoryModel = require("../models/category.js");

const createNewCategory = async (category) => {
  try {
    const categoryDoc = await new categoryModel({ category: "asdads" }).save();
    // const { id } = categoryDoc;
    // const info = await categoryModel.find({});
    // // console.log(info)
    // const categoryNames = info.map((el) => el.category);
    // console.log('Controller:', genreNames)
    return {
      status: "ok",
      // payload: { id },
      // categoryNames: categoryNames,
    };
  } catch (err) {
    return { status: "dublicate_category" };
  }
};

module.exports = {
  createNewCategory,
};
