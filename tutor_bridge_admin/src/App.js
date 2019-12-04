import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './containers/Login';
import Setup from './containers/Setup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <Router history={createBrowserHistory()}>

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/setup">
          <Setup />
        </Route>
        <Route exact path="/dashboard">
          <div className="wrapper">
            <Navbar />
            <Sidebar />
          </div>
        </Route>
      </Switch>
    </Router >
  )
}

export default App;
