import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchColors from "../queries/fetchColors";

class Sidebar extends Component {
  render() {
    const { colors } = this.props.data;

    let randomColor =
      colors && colors[Math.floor(Math.random() * colors.length)];

    //still fetching colors to pick from
    if (!randomColor) {
      return null;
    }

    return (
      <div
        className="col-sm-3"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#D3D3D3"
        }}
      >
        <Link to={`/${randomColor.id}`} className="random-color-button">
          Random Color
        </Link>

        <ul className="color-category-list">
          <li className="color-category-item">Red</li>
          <li className="color-category-item">Orange</li>
          <li className="color-category-item">Yellow</li>
          <li className="color-category-item">Green</li>
          <li className="color-category-item">Blue</li>
          <li className="color-category-item">Purple</li>
          <li className="color-category-item">Brown</li>
          <li className="color-category-item">Grey</li>
        </ul>
      </div>
    );
  }
}

export default graphql(fetchColors)(Sidebar);
