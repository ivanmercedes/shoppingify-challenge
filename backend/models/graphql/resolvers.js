const Category = require("../Category");
const Product = require("../Product");

const resolvers = {
  Query: {
    allProducts: async (root, args) => {
      const products = await Product.find().lean();
      return products;
    },
    allCategory: async (root, args) => {
      const category = await Category.find().lean();
      return category;
    },
  },
};

module.exports = resolvers;
