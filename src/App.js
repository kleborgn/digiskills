import React, { useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import Guides from './components/pages/Guides';
import SignUp from './components/pages/SignUp';
const App = () => {
 
  return (
    <>
    <Router>
        <Navigation/>
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/Quiz' component= {Quiz}/>
          <Route path='/Guides' component= {Guides}/>
          <Route path='/Sign-up' component= {SignUp}/>
        </Switch>
      </Router>
    
    </>
  );
}

export default App;