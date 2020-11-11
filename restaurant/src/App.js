import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Home";
import Home from "./Logo_Page";
import './App.css';
import React from 'react';

function App() {
  
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/Home">
       <div className="bell">
                      <h1> 🔔 </h1>
                     </div>
       <Header />
       </Route>
       <Route path="/">
        <Home />
       </Route>
     </Switch>
   </div>
  </Router>  
  );
}

export default App;
