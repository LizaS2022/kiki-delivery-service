const { Kitty, Hooman, Driver } = require("../models");

const resolvers = {
  Query: {
    viewKitties: async () => {
      return await Kitty.find();
    },
  },
  Mutation: {
    addKitty: async (_, { input }) => {
      const kitty = await Kitty.create(input);
      console.log(kitty);
      return kitty;
    },
  },
};

module.exports = resolvers;
