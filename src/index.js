import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../assets/sass/style.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Stack from './components/Stack';
import App from './components/app';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/stack" component={Stack} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
