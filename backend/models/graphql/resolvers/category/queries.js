const Category = require("../../../Category");

const categoryQueries = {
  allCategory: async (root, args, context, info) => {
    const category = await Category.find().populate("products").lean();
    return category;
  },
};

module.exports = categoryQueries;
