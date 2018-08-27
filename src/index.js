import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../assets/sass/style.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Stack from './components/Stack';
import App from './components/app';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/stack" component={Stack} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
