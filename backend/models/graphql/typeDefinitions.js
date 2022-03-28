const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: String
    description: String!
    image: String!
  }

  type Category {
    _id: ID!
    name: String!
  }

  type Query {
    allProducts: [Product]!
    allCategory: [Category]!
  }

  type Mutation {
    addCategory(name: String!): Category
  }
`;

module.exports = typeDefs;
