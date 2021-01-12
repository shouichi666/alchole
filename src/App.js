import React from "react";
import Top from "./view/pages/Top";
import DissolvesCalculation from "./view/pages/DissolvesCalculation";
import PercentCalculation from "./view/pages/PercentCalculation";
import Search from "./view/pages/Search";
import { HashRouter as Router, Route } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Top} />
        <Route path="/a" component={PercentCalculation} />
        <Route path="/dissolves" component={DissolvesCalculation} />
        <Route path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
