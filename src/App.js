import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-6">Col one</div>
          <div class="col-6">Col two</div>
        </div>
      </div>
    );
  }
}

export default App;
