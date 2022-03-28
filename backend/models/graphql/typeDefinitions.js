const { gql } = require("apollo-server");

const typeDefs = gql`
  type Category {
    _id: ID!
    name: String!
  }

  type Product {
    _id: ID!
    name: String!
    category: Category!
    description: String!
    image: String!
  }

  type Query {
    allProducts: [Product]!
    allCategory: [Category]!
  }

  type Mutation {
    addProduct(
      name: String!
      category: String!
      description: String!
      image: String!
    ): Product

    addCategory(name: String!): Category
  }
`;

module.exports = typeDefs;
