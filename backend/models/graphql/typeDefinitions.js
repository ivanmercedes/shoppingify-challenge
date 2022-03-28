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
    name: String!
  }

  type Query {
    allProducts: [Product]!
    allCategory: [Category]!
  }
`;

module.exports = typeDefs;
