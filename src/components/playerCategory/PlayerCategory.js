import React from 'react';
import propTypes from 'prop-types';

const PlayerCategory = (props) => {
  const categories = ['All', 'Defender', 'Midfielder', 'Goalkeeper', 'Forward'];
  const { handleCategory } = props;

  const handleSelectedCategory = (s) => {
    handleCategory(s);
  };

  return (
    <div>
      <select
        onChange={(e) => handleSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option
            value={category}
            key={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

PlayerCategory.propTypes = {
  handleCategory: propTypes.func.isRequired,
};

export default PlayerCategory;
