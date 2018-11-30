import gql from "graphql-tag";

export default gql`
  {
    colors {
      colorHex
      colorCategory
    }
  }
`;
