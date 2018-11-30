import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginLeft: "-15px", marginRight: "-15px" }}
      >
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <input placeholder="Search" className="search-input" />
      </nav>
    );
  }
}

export default Header;
