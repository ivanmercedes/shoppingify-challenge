const { UserInputError } = require("apollo-server");

const Category = require("../Category");
const Product = require("../Product");

const resolvers = {
  Query: {
    allProducts: async (root, args) => {
      const products = await Product.find().populate("category", "name").lean();
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
      if (categoryExists)
        throw new UserInputError("Category already exists", {
          invalidArgs: args.name,
        });

      const category = new Category(args);
      await category.save();
      return category;
    },

    addProduct: async (root, args) => {
      const productExists = await Product.findOne({ name: args.name });
      if (productExists) {
        throw new UserInputError("Product already exists", {
          invalidArgs: args.name,
        });
      }
      let product = await Product.create(args);
      product = await product.populate("category", "name");
      return product;
    },
  },
  Product: {
    category: (root) => {
      return {
        name: root.category.name,
        _id: root.category._id,
      };
    },
  },
};

module.exports = resolvers;
