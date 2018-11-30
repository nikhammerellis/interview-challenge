const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Color = require("../models/Color");

const ColorType = new GraphQLObjectType({
  name: "ColorType",
  fields: () => ({
    colorHex: { type: GraphQLString },
    colorCategory: { type: GraphQLString }
  })
});

module.exports = ColorType;
