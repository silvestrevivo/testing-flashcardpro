import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import * as actions from '../actions';

class StackList extends Component {
  static propTypes = {
    setStack: PropTypes.func.isRequired,
  };

  render() {
    console.log(this.props);
    const { setStack } = this.props;
    return (
      <div>
        {stacks.map(stack => (
          <Link to="/stack" key={stack.id} onClick={() => setStack(stack)}>
            <h4>{stack.title}</h4>
          </Link>
        ))}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(StackList);
