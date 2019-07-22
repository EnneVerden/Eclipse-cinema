import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ anchor, itemName }) => (
  <a href={anchor} className="menu__item" data-toggle="tab">
    {itemName}
  </a>
);

MenuItem.propTypes = {
  anchor: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default MenuItem;
