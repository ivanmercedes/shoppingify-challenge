const products = [
  {
    id: 1,
    name: "platano",
    category: "Vivere",
    description: "String",
    image: "imagen test",
  },
];

const resolvers = {
  Query: {
    allProducts: async (root, args) => {
      return products;
    },
  },
};

module.exports = resolvers;
