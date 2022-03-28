const { UserInputError } = require("apollo-server");
const Category = require("../../../models/Category");

const categoryMutations = {
  addCategory: async (root, args, context, info) => {
    const categoryExists = await Category.findOne(args);
    if (categoryExists)
      throw new UserInputError("Category already exists", {
        invalidArgs: args.name,
      });

    const category = new Category(args);
    await category.save();
    return category;
  },
};

module.exports = categoryMutations;
