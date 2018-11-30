import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ColorList from "./components/ColorList";
import ColorDetail from "./components/ColorDetail";

import "./App.css";

const client = new ApolloClient({
  //this takes every piece of data fetched from the back end with ApolloClient
  //and runs it through this function (prevents refetch queries, minimizing API calls)
  //dataIdFromObject: o => o.id
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container-fluid">
          <BrowserRouter>
            <div>
              <Header />
              <div className="row">
                <Sidebar />
                <Switch>
                  <Route exact path="/" component={ColorList} />
                  <Route exact path="/:id" component={ColorDetail} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
