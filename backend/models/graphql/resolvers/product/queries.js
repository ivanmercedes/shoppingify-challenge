const Product = require("../../../Product");

const categoryQueries = {
  allProducts: async (root, args, context, info) => {
    const products = await Product.find().populate("category", "name").lean();
    return products;
  },
};

module.exports = categoryQueries;
