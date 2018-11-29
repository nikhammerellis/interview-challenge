import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Sidebar extends Component {
  render() {
    return (
      <div
        className="col-sm-3"
        style={{
          display: "flex",
          flexDirecton: "column",
          backgroundColor: "#D3D3D3"
        }}
      >
        <h1>Sidebar</h1>
      </div>
    );
  }
}

export default Sidebar;
