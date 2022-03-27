const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: String
    description: String!
    image: String!
  }

  type Query {
    allProducts: [Product]!
  }

`;

const resolvers = {
	Query: {
		allProducts: async (root, args) => {
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log('Server ready at ' + url);
});
