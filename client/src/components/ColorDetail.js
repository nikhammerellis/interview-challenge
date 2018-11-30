import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchColor from "../queries/fetchColor";
import { Link } from "react-router-dom";

class ColorDetail extends Component {
  renderSimilarColors = () => {
    const { color } = this.props.data;

    return color.similarColors.map(simCol => {
      return (
        <div className="detail-swatch-small" key={simCol.id}>
          <div
            className="color-box-small"
            style={{ backgroundColor: simCol.colorHex }}
          />
          <div className="color-hex-small">{simCol.colorHex}</div>
        </div>
      );
    });
  };
  render() {
    const { color } = this.props.data;

    if (!color) {
      return (
        <div className="col-sm-9">
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div className="col-sm-9">
        <div className="detail-swatch-large" key={color.id}>
          <div
            className="color-box-large"
            style={{ backgroundColor: color.colorHex }}
          />
          <div className="color-hex-large">{color.colorHex}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {this.renderSimilarColors()}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Link to="/">
            <button className="clear-button">Clear</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default graphql(fetchColor, {
  options: props => {
    return { variables: { id: props.match.params.id } };
  }
})(ColorDetail);
