import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

class Stack extends Component {
  static propTypes = {
    stack: PropTypes.object.isRequired,
  };

  render() {
    const {
      stack: { title, cards },
    } = this.props;
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>
        <h3>{title}</h3>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stack: state,
  };
}

export default connect(
  mapStateToProps,
  null
)(Stack);
