import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import StackList from './StackList';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Flashcard Pro</h2>
        <hr />
        <StackList />
      </div>
    );
  }
}

export default hot(module)(App);
