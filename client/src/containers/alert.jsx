import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorAlert from '../shared/alerts/alert';
import { causeErrorReset } from '../actions/throwError';

class ErrorAlertContainer extends PureComponent {
  timeoutNumber;

  componentDidUpdate = () => {
    const { errorText, causeReset } = this.props;

    if (errorText !== '') {
      const alert = document.querySelector('.error-alert');

      alert.style.display = 'flex';
      alert.style.marginLeft = `-${alert.offsetWidth / 2}px`;
      clearTimeout(this.timeoutNumber);
      this.timeoutNumber = setTimeout(() => {
        alert.style.display = 'none';
        causeReset();
      }, 3000);
    }
  };

  componentWillUnmount = () => {
    const { causeReset } = this.props;

    clearTimeout(this.timeoutNumber);
    causeReset();
  };

  render() {
    const { errorText } = this.props;

    return <ErrorAlert errorText={errorText} />;
  }
}

ErrorAlertContainer.propTypes = {
  errorText: PropTypes.string,
  causeReset: PropTypes.func.isRequired,
};

ErrorAlertContainer.defaultProps = {
  errorText: '',
};

const mapStateToProps = state => ({
  errorText: state.error.errorText,
});

const mapDispatchToProps = dispatch => ({
  causeReset: () => dispatch(causeErrorReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorAlertContainer);
