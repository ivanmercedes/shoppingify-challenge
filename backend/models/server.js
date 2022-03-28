const { ApolloServer } = require("apollo-server");
const { dbConnection } = require("../database/config");

const typeDefs = require("./graphql/typeDefinitions");
const resolvers = require("./graphql/resolvers");
class Server {
  constructor() {
    // console.clear();
    this.port = process.env.PORT;
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    this.connectDB();
  }

  async connectDB() {
    await dbConnection();
  }

  listen() {
    this.server.listen(this.port).then(({ url }) => {
      console.log("Server ready at " + url);
    });
  }
}

module.exports = Server;
