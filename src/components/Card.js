import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
  };

  state = {
    reveal: false,
  };

  render() {
    const {
      card: { prompt, answer },
    } = this.props;
    const { reveal } = this.state;

    return (
      <div className="card" role="presentation" onClick={() => this.setState({ reveal: true })}>
        <div className="card-prompt">
          <h4>{prompt}</h4>
        </div>
        <div className="card-answer">
          <h4 className={reveal ? 'text-revealed' : 'text-hiden'}>{answer}</h4>
        </div>
      </div>
    );
  }
}

export default Card;
