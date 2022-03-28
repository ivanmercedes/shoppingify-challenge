const { gql } = require("apollo-server");

const typeDefs = gql`
  type Category {
    _id: ID!
    name: String!
    products: [Product]!
  }

  type Product {
    _id: ID!
    name: String!
    category: Category!
    description: String!
    image: String!
  }

  type List {
    _id: ID!
    name: String!
    status: Boolean
    products: [Product]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    allProducts: [Product]!
    allCategory: [Category]!
    allList: [List]!
  }

  type Mutation {
    addProduct(
      name: String!
      category: String!
      description: String!
      image: String!
    ): Product

    addCategory(name: String!): Category
    addList(name: String!): List
  }
`;

module.exports = typeDefs;
