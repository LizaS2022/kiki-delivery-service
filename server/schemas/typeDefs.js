const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Kitty {
    _id: ID
    name: String
    breed: String
    age: Int
    gender: String
    color: String
    trauma: String
    declawed: Boolean
  }

  type Query {
    viewKitties: [Kitty]
  }

  type Mutation {
    addKitty(input: KittyInput): Kitty
  }

  input KittyInput {
    name: String!
    breed: String!
    age: Int!
    gender: String!
    color: String!
    trauma: String
    declawed: Boolean!
  }
`;

module.exports = typeDefs;
