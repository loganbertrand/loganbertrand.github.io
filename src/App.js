import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Footer from './components/Footer'



function App() {
  return (
    <Router>
      <div className='appDiv'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <div style={{clear:'both'}}></div>
        <Footer/>
        
      </div>
    </Router>

  );
}

export default App;
