const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const RootQueryType = require("./root_query_type");
//const mutations = require("./mutations");
//mutation: mutations

module.exports = new GraphQLSchema({
  query: RootQueryType
});
