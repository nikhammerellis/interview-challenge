import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import ReactDOM from "react-dom";

const colors = [
  {
    id: 1,
    colorHex: "#0000ff",
    colorCategory: "blue"
  },
  {
    id: 2,
    colorHex: "#ff0000",
    colorCategory: "red"
  },
  {
    id: 3,
    colorHex: "#00ff00",
    colorCategory: "green"
  },
  {
    id: 4,
    colorHex: "#ffcc00",
    colorCategory: "orange"
  },
  {
    id: 5,
    colorHex: "#ffff00",
    colorCategory: "yellow"
  },
  {
    id: 6,
    colorHex: "#0000ff",
    colorCategory: "blue"
  },
  {
    id: 7,
    colorHex: "#ff0000",
    colorCategory: "red"
  },
  {
    id: 8,
    colorHex: "#00ff00",
    colorCategory: "green"
  },
  {
    id: 9,
    colorHex: "#ffcc00",
    colorCategory: "orange"
  },
  {
    id: 10,
    colorHex: "#ffff00",
    colorCategory: "yellow"
  },
  {
    id: 11,
    colorHex: "#0000ff",
    colorCategory: "blue"
  },
  {
    id: 12,
    colorHex: "#ff0000",
    colorCategory: "red"
  },
  {
    id: 13,
    colorHex: "#00ff00",
    colorCategory: "green"
  },
  {
    id: 14,
    colorHex: "#ffcc00",
    colorCategory: "orange"
  },
  {
    id: 15,
    colorHex: "#ffff00",
    colorCategory: "yellow"
  },
  {
    id: 16,
    colorHex: "#0000ff",
    colorCategory: "blue"
  },
  {
    id: 17,
    colorHex: "#ff0000",
    colorCategory: "red"
  },
  {
    id: 18,
    colorHex: "#00ff00",
    colorCategory: "green"
  },
  {
    id: 19,
    colorHex: "#ffcc00",
    colorCategory: "orange"
  },
  {
    id: 20,
    colorHex: "#ffff00",
    colorCategory: "yellow"
  }
];

class ColorList extends Component {
  state = {
    colors: colors,
    currentPage: 1,
    colorsPerPage: 12
  };

  // componendDidMount() {
  //   window.scrollTo(0, 0);
  // }

  // componentDidUpdate() {
  //   ReactDOM.findDOMNode(this).scrollTop = 0;
  // }

  handlePagination = e => {
    this.setState({
      currentPage: Number(e.target.id)
    });
    window.scrollTo(0, 0);
  };

  renderColors = () => {
    const { colors, currentPage, colorsPerPage } = this.state;

    //logic for displaying colors
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage;
    const currentColors = colors.slice(indexOfFirstColor, indexOfLastColor);

    return currentColors.map((color, i) => {
      return (
        <li className="color-swatch" key={color.id}>
          <div
            className="color-box"
            style={{ backgroundColor: color.colorHex }}
          />
          <div className="color-hex">{color.colorHex}</div>
        </li>
      );
    });
  };

  renderPageNumbers = () => {
    const { colors, currentPage, colorsPerPage } = this.state;
    console.log("CURRENT PAGE:", currentPage);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(colors.length / colorsPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(number => {
      console.log("MAPPED NUMBER: ", number);
      return (
        <li
          style={{
            listStyleType: "none",
            display: "inline-block",
            fontFamily: "Source Serif Pro, serif",
            borderBottom: number === currentPage ? "2px solid black" : "none",
            width: "20px",
            textAlign: "center",
            fontWeight: number === currentPage ? "bold" : "normal"
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
    window.scrollTo(0, 0);
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

export default ColorList;
