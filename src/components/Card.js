import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card: { prompt, answer } }) => (
  <div>
    <div>
      <h4>{prompt}</h4>
    </div>
    <div>
      <h4>{answer}</h4>
    </div>
  </div>
);

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
