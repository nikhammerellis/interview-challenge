import React, { Component } from "react";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";

import Logo from "../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginLeft: "-15px", marginRight: "-15px" }}
      >
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    );
  }
}

export default Header;
