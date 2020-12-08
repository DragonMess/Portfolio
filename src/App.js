import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import NoMatch from "./components/NoMatch";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <Layout>
      <Navigation />
      <Router>
        {/* <Router basename={window.location.pathname || "http://localhost:3000/"}> */}

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
