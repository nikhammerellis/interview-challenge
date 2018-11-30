import gql from "graphql-tag";

export default gql`
  query ColorQuery($id: ID!) {
    color(id: $id) {
      id
      colorHex
      colorCategory
      similarColors {
        id
        colorHex
        colorCategory
      }
    }
  }
`;
