const { categoryMutations, categoryQueries } = require("./category");
const { productMutations, productQueries } = require("./product");

const Product = require("../../models/Product");

const resolvers = {
  Query: {
    ...productQueries,
    ...categoryQueries,
  },

  Mutation: {
    ...categoryMutations,
    ...productMutations,
  },

  Product: {
    category: (root) => {
      return {
        name: root.category.name,
        _id: root.category._id,
      };
    },
  },

  Category: {
    products: async (root, args, context, info) => {
      const products = await Product.find({ category: { $in: root._id } })
        .populate("category")
        .lean();

      return products;
    },
  },
};

module.exports = resolvers;
