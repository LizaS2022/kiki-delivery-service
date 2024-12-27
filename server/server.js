const express = require("express");
const path = require("path"); //lIBRARY FROM NODE
//Apollo-server express server
const { ApolloServer } = require("apollo-server-express");

//Import schemas
const { typeDefs, resolvers } = require("./schemas");

//Mongoos connector
const db = require("./config/connection");

// Express
const app = express();
//Port
const PORT = process.env.PORT || 3001;

//Instantiate new ApolloServer
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Start Apolloserver , then connect to express, connect to mongoose, then start th app
const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  db.once("open", () => {
    console.log("Do i come in  here?");
    app.listen(PORT, () => {
      console.log("Server running on PORT 3001!");
    });
  });
};

startApolloServer();
