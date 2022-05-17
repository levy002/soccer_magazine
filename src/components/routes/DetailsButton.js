import React from 'react';
import propTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';

const DetailsButton = ({ id }) => (
  <button
    type="button"
    id={id}
    className="absolute top-0 right-0"
  >
    <BiRightArrowCircle className="cursor-pointer" size={22} color="purple" />
  </button>
);

DetailsButton.propTypes = {
  id: propTypes.number.isRequired,
};

export default DetailsButton;
