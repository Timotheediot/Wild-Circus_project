import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/Home';
import News from './components/News';
import Shop from './components/Shop';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
};


        
export default App;