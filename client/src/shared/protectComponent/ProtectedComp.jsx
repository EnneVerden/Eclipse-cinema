import React from 'react';
import PropTypes from 'prop-types';

const ProtectedComponent = ({
  component: Component,
  protectField,
  ...props
}) => {
  if (protectField === 'admin') {
    return <Component {...props} />;
  }
  return null;
};

ProtectedComponent.propTypes = {
  component: PropTypes.elementType.isRequired,
  protectField: PropTypes.string.isRequired,
};

export default ProtectedComponent;
