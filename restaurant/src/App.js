import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Next_Page from "./Next_Page";
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Login from "./Login";
import { Card } from "react-bootstrap";
import Cards from "./Cards";

function App() {
  
  return (
    
    <div className="App">
      <Router>
      <Switch>
      <Route path="/">
        <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
        </div>
        </div>        
        <Route path="/" component={Cards}>
        </Route>
        
        </Route>
        <Route exact path="/login">
        <Login />
       </Route>
       </Switch>
      </Router>  
    </div>
  );
}

export default App;