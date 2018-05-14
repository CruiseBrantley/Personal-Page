import React, { Component } from "react";
import Notes from "./components/notes/notes";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const Resume = () => (
  <div>
    <a href="\resume\index.html">Resume</a>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/notes" component={Notes} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
