import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Film from '../pages/home/components/film';
import { buyTicket } from '../actions/buyTicket';

class FilmContainer extends PureComponent {
  state = {
    disableBtn: false,
  };

  componentDidMount = () => this.disableButton();

  componentDidUpdate = () => this.disableButton();

  disableButton = () => {
    const {
      userTickets,
      film: { _id },
    } = this.props;

    userTickets.forEach((item) => {
      if (item._id === _id) {
        this.setState({ disableBtn: true });
      }
    });
  };

  buyTicket = () => {
    const {
      userBalance, userID, setTicket, film,
    } = this.props;

    if (userBalance < film.ticketPrice) {
      const alert = document.querySelector('.balance-error-alert');

      alert.style.display = 'flex';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 3000);
      return;
    }

    setTicket(`api/users/${userID}/change`, { buyTicket: film });
  };

  render() {
    const { film } = this.props;
    const { disableBtn } = this.state;

    return (
      <Film film={film} buyTicket={this.buyTicket} disableBtn={disableBtn} />
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
};

const mapStateToProps = state => ({
  userTickets: state.userData.tickets,
  userID: state.userData._id,
  userBalance: state.userData.balance,
});

const mapDispatchToProps = dispatch => ({
  setTicket: (url, body) => dispatch(buyTicket(url, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmContainer);
