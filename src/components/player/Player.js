import React from 'react';
import PropTypes from 'prop-types';
import DetailsButton from '../routes/DetailsButton';

const Player = ({ name, photo, id }) => (
  <div>
    <img src={photo} alt="Player" />
    <h4>{name}</h4>
    <DetailsButton id={id} />
  </div>
);

Player.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Player;
