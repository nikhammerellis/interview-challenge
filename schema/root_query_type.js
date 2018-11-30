const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const ColorType = require("./color_type");
const Color = mongoose.model("color");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    colors: {
      type: new GraphQLList(ColorType),
      resolve() {
        return Color.find({});
      }
    },
    color: {
      type: ColorType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Color.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
