import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchColors from "../queries/fetchColors";

class ColorList extends Component {
  state = {
    currentPage: 1,
    colorsPerPage: 12
  };

  handlePagination = e => {
    this.setState({
      currentPage: Number(e.target.id)
    });
    window.scrollTo(0, 0);
  };

  renderColors = () => {
    const { currentPage, colorsPerPage } = this.state;
    const { colors } = this.props.data;

    //logic for displaying colors
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = colors.slice(indexOfFirstColor, indexOfLastColor);

    return currentColors.map((color, i) => {
      return (
        <Link to={`/${color.id}`} key={color.id}>
          <li className="color-swatch">
            <div
              className="color-box"
              style={{ backgroundColor: color.colorHex }}
            />
            <div className="color-hex">{color.colorHex}</div>
          </li>
        </Link>
      );
    });
  };

  renderPageNumbers = () => {
    const { currentPage, colorsPerPage } = this.state;
    const { colors } = this.props.data;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(colors.length / colorsPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(number => {
      return (
        <li
          style={{
            listStyleType: "none",
            display: "inline-block",
            fontFamily: "Source Serif Pro, serif",
            borderBottom: number === currentPage ? "2px solid black" : "none",
            width: "20px",
            textAlign: "center",
            fontWeight: number === currentPage ? "bold" : "normal",
            cursor: "pointer"
          }}
          key={number}
          id={number}
          onClick={this.handlePagination}
        >
          {number}
        </li>
      );
    });
  };

  render() {
    if (!this.props.data.colors) {
      return (
        <div className="col-sm-9" style={styles.gridContainer}>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div className="col-sm-9" style={styles.gridContainer}>
        <div style={styles.colorsContainer}>
          <ul>{this.renderColors()}</ul>
        </div>
        <div style={styles.paginationNums}>
          <ul>{this.renderPageNumbers()}</ul>
        </div>
      </div>
    );
  }
}

const styles = {
  gridContainer: {
    marginTop: "40px"
  },
  colorsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  paginationNums: {
    textAlign: "center",
    marginRight: "20px"
  }
};

export default graphql(fetchColors)(ColorList);
