const { UserInputError } = require("apollo-server");

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

  Mutation: {
    addCategory: async (root, args) => {
      const categoryExists = await Category.findOne(args);
      console.log(categoryExists);
      if (categoryExists)
        throw new UserInputError("Category already exists", {
          invalidArgs: args.name,
        });

      const category = new Category(args);
      category.save();
      return category;
    },
  },
};

module.exports = resolvers;
