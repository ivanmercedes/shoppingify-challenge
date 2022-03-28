const { UserInputError } = require("apollo-server");
const Product = require("../../../models/Product");

const categoryMutations = {
  addProduct: async (root, args, context, info) => {
    const productExists = await Product.findOne({ name: args.name });
    if (productExists) {
      throw new UserInputError("Product already exists", {
        invalidArgs: args.name,
      });
    }
    let product = await Product.create(args);
    product = await product.populate("category", "name");
    await Category.findByIdAndUpdate(
      args.category,
      { $push: { products: product._id } },
      { new: true, useFindAndModify: false },
    );
    return product;
  },
};

module.exports = categoryMutations;
