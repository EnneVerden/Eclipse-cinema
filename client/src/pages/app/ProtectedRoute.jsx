import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const protect = (protectField, redirectTo, redirect, props, Component) => {
  if (redirect) {
    return protectField ? (
      <Redirect to={redirectTo} />
    ) : (
      <Component {...props} />
    );
  }
  return protectField ? <Component {...props} /> : <Redirect to={redirectTo} />;
};

const ProtectedRoute = ({
  component: Component,
  protectField,
  redirectTo,
  redirect,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => protect(protectField, redirectTo, redirect, props, Component)
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  protectField: PropTypes.string,
  redirect: PropTypes.bool,
  redirectTo: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  protectField: undefined,
  redirect: false,
  redirectTo: '/',
};

export default ProtectedRoute;
