import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DetailsButton from '../routes/DetailsButton';

const Player = ({ name, photo, id }) => (
  <Link to={`/player/${id}`} className="relative flex flex-col gap-1">
    <img src={photo} alt="Player" className="" />
    <h4 className="text-purple-700 text-center">{name}</h4>
    <DetailsButton id={id} />
  </Link>
);

Player.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Player;
