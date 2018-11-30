import gql from "graphql-tag";

export default gql`
  {
    colors {
      id
      colorHex
      colorCategory
    }
  }
`;
