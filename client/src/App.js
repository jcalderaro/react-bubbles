/* ------------------------------------------------- */

import React from "react";
// removed { useState}
import { BrowserRouter as Router, Route } from "react-router-dom";

/* ------------------------------------------------- */

import Login from "./components/Login";
import "./styles.scss";

/* ------------------------------------------------- */
// brought in files but they aren't lighting up?
// export default was working. confused
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
// nevermind, needed to make a PrivateRoute component
// to display BubblePage when autheticated. 

/* ------------------------------------------------- */

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

/* ------------------------------------------------- */

export default App;

/* ------------------------------------------------- */