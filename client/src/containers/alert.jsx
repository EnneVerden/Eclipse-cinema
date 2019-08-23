import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Warning from '../shared/alerts/alert';
import { causeWarningReset } from '../actions/throwWarning';

class WarningAlertContainer extends PureComponent {
  timeoutNumber;

  componentDidUpdate = () => {
    const { warningText, causeReset } = this.props;

    if (warningText !== '') {
      const alert = document.querySelector('.warning-alert');

      alert.style.display = 'flex';
      if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        alert.style.marginLeft = `-${alert.clientWidth / 2}px`;
      }
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
    const { warningText, warningType } = this.props;

    return <Warning warningText={warningText} warningType={warningType} />;
  }
}

WarningAlertContainer.propTypes = {
  warningText: PropTypes.string,
  warningType: PropTypes.string,
  causeReset: PropTypes.func.isRequired,
};

WarningAlertContainer.defaultProps = {
  warningText: '',
  warningType: '',
};

const mapStateToProps = state => ({
  warningText: state.warning.warningText,
  warningType: state.warning.warningType,
});

const mapDispatchToProps = dispatch => ({
  causeReset: () => dispatch(causeWarningReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WarningAlertContainer);
