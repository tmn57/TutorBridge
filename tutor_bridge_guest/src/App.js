import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import TeacherPage from './containers/TeacherPage';
import StudentPage from './containers/StudentPage';
import Footer from './components/Footer';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/teacher">
          <TeacherPage />
        </Route>
        <Route exact path="/student">
          <StudentPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
