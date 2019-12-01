import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
