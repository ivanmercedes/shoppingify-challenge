const { UserInputError } = require("apollo-server");
const List = require("../../../models/List");

const listMutations = {
  addList: async (root, args, context, info) => {
    const list = new List(args);
    return await list.save();
  },
};

module.exports = listMutations;
