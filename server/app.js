
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');


const fs = require('fs')
const path = require('path')

const typeDefs = gql`
  type Query {
    hello: String,
    components: [String],
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    components: () => {
      const dir = path.resolve(__dirname, '../components')
      const list = fs.readdirSync(dir)
      return list
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen(8081, (err) => {
  if(err) {
    console.error(err)
  }
})