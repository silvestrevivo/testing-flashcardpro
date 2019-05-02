import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import stacksFromJSON from '../data/stacks.json';
import * as actions from '../actions';

class StackList extends Component {
  static propTypes = {
    setStack: PropTypes.func.isRequired,
    loadStacks: PropTypes.func.isRequired,
    stacks: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { loadStacks } = this.props;
    if (loadStacks.length === 0) loadStacks(stacksFromJSON);
  }

  render() {
    const { setStack, stacks } = this.props;
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

function mapStateToProps(state) {
  return {
    stacks: state.stacks,
  };
}

export default connect(
  mapStateToProps,
  actions
)(StackList);
