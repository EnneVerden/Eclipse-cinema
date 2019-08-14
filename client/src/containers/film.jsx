import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Film from '../pages/home/components/film';
import { buyTicket } from '../actions/buyTicket';
import { throwError, causeErrorReset } from '../actions/throwError';

class FilmContainer extends PureComponent {
  state = {
    disabledBtn: false,
  };

  componentDidMount = () => this.disableButton();

  componentDidUpdate = (prevProps) => {
    const { userTickets } = this.props;

    if (userTickets !== prevProps.userTickets) {
      this.disableButton();
    }
  };

  disableButton = () => {
    const {
      userTickets,
      film: { _id },
    } = this.props;

    userTickets.forEach((item) => {
      if (item._id === _id) {
        this.setState({ disabledBtn: true });
      }
    });
  };

  buyTicket = () => {
    const {
      userBalance,
      userID,
      setTicket,
      film,
      throwNewError,
      causeReset,
    } = this.props;

    if (userBalance < film.ticketPrice) {
      return throwNewError('Insufficient funds on balance!');
    }

    setTicket(userID, { buyTicket: film });
    return causeReset();
  };

  render() {
    const { film } = this.props;
    const { disabledBtn } = this.state;

    return (
      <Film film={film} buyTicket={this.buyTicket} disabledBtn={disabledBtn} />
    );
  }
}

FilmContainer.propTypes = {
  userBalance: PropTypes.number.isRequired,
  userID: PropTypes.string.isRequired,
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  userTickets: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  setTicket: PropTypes.func.isRequired,
  throwNewError: PropTypes.func.isRequired,
  causeReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userTickets: state.userData.tickets,
  userID: state.userData._id,
  userBalance: state.userData.balance,
});

const mapDispatchToProps = dispatch => ({
  setTicket: (userID, body) => dispatch(buyTicket(userID, body)),
  throwNewError: errorText => dispatch(throwError(errorText)),
  causeReset: () => dispatch(causeErrorReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmContainer);
