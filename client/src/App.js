import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ColorList from "./components/ColorList";
import ColorDetail from "./components/ColorDetail";

import "./App.css";

class App extends Component {
  // componendDidMount() {
  //   window.scrollTo(0, 0);
  // }
  // componentDidUpdate() {
  //   ReactDOM.findDOMNode(this).scrollTop = 0;
  // }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
            <div className="row">
              <Sidebar />
              <Switch>
                <Route exact path="/" component={ColorList} />
                <Route exact path="/detail" component={ColorDetail} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
