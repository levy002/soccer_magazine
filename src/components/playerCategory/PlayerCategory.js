import React from 'react';
import propTypes from 'prop-types';

const PlayerCategory = (props) => {
  const categories = ['All', 'Defender', 'Midfielder', 'Goalkeeper', 'Forward'];
  const { handleCategory } = props;

  const handleSelectedCategory = (s) => {
    handleCategory(s);
  };

  return (
    <div className="flex items-center justify-center gap-3 p-1">
      <p className="text-purple-700">Select Category:</p>
      <select
        onChange={(e) => handleSelectedCategory(e.target.value)}
        className="p-2 px-3 rounded text-purple-700 bg-gray-100"
      >
        {categories.map((category) => (
          <option
            value={category}
            key={category}
            className="text-purple-700"
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
