import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/HomeEmp';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Dashboard from './pages/index';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app/" exact={true} component={App} />
      <Route path="/app/Cadastro" component={Cadastro} />
      <Route path="/app/Login" component={Login} />
      <Route path="/app/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
