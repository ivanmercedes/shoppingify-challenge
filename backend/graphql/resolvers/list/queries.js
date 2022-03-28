const List = require("../../../models/List");

const listQueries = {
  allList: async (root, args, context, info) => {
    const list = await List.find().populate("products").lean();
    console.log(list);
    return list;
  },
};

module.exports = listQueries;
