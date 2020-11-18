import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Home";
import Home from "./Logo_Page";
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import ReactNotification from 'react-notifications-component'


function App() {
  
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/Home">
       <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      </div>
    </div>
  
    <div className="app-container">
      <ReactNotification />
    </div>
       <Header />
       </Route>
       <Route path="/">
        <Home />
       </Route>
       <Route path="/Login">
        
       </Route>
      
     </Switch>
   </div>
  </Router>  
  );
}


export default App;
