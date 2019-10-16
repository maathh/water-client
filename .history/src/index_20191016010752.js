import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Dashboard></Dashboard>,
  // <BrowserRouter>
  //   <Switch>
  //     <Route path="/" exact={true} component={Index} />
  //     <Route path="/cadastro" component={Cadastro} />
  //     <Route path="/login" component={Login} />
  //     <Route path="/dashboard" component={Dashboard} />
  //   </Switch>
  // </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
