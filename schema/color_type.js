const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Color = require("../models/Color");

const ColorType = new GraphQLObjectType({
  name: "ColorType",
  fields: () => ({
    id: { type: GraphQLID },
    colorHex: { type: GraphQLString },
    colorCategory: { type: GraphQLString },
    similarColors: {
      type: new GraphQLList(ColorType),
      resolve(parentValue) {
        return Color.find({ colorCategory: parentValue.colorCategory }).limit(
          5
        );
      }
    }
  })
});

module.exports = ColorType;
