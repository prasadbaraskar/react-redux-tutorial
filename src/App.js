import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
