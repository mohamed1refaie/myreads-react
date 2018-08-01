import React from "react";
import { Route } from "react-router-dom";
import Search from "./Search";
import MyReads from "./MyReads";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => <Search />} />
        <Route exact path="/" render={() => <MyReads />} />
      </div>
    );
  }
}

export default BooksApp;
