import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';

const DetailsButton = ({ id }) => (
  <Link
    to={`/player/${id}`}
  >
    <BiRightArrowCircle />
  </Link>
);

DetailsButton.propTypes = {
  id: propTypes.number.isRequired,
};

export default DetailsButton;
