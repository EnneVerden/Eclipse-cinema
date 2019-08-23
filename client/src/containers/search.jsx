import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from '../pages/home/components/search';
import { getDesiredFilm } from '../actions/filmSearch';
import { buyTicket } from '../actions/buyTicket';
import { throwWarning, causeWarningReset } from '../actions/throwWarning';

class SearchContainer extends PureComponent {
  state = {
    searchTerm: '',
    searchIsShown: false,
    disabledBtn: false,
  };

  componentDidUpdate = (prevProps) => {
    const { film, userTickets } = this.props;

    if (film !== prevProps.film) {
      this.setState({ disabledBtn: false });
      this.setState({ searchIsShown: true });
    }

    if (film !== prevProps.film || userTickets !== prevProps.userTickets) {
      this.disableButton();
    }
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      searchTerm: value,
    });
  };

  getDesiredFilm = () => {
    const { searchTerm } = this.state;
    const { searchFilm } = this.props;

    if (searchTerm === '') return;

    searchFilm(searchTerm);
  };

  closeSearchResult = () => {
    this.setState({ searchIsShown: false });
  }

  buyTicket = () => {
    const {
      userBalance,
      userID,
      film,
      purchaseTicket,
      throwNewWarning,
      causeReset,
    } = this.props;

    if (userBalance < film.ticketPrice) {
      return throwNewWarning('Insufficient funds on balance!', 'error');
    }

    purchaseTicket(userID, { buyTicket: film });
    return causeReset();
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

  render() {
    const { disabledBtn, searchIsShown } = this.state;
    const { film } = this.props;

    return (
      <Search
        handleChange={this.handleChange}
        getDesiredFilm={this.getDesiredFilm}
        film={film}
        buyTicket={this.buyTicket}
        disabledBtn={disabledBtn}
        searchIsShown={searchIsShown}
        closeSearchResult={this.closeSearchResult}
      />
    );
  }
}

SearchContainer.propTypes = {
  film: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  userID: PropTypes.string.isRequired,
  userBalance: PropTypes.number.isRequired,
  userTickets: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  searchFilm: PropTypes.func.isRequired,
  purchaseTicket: PropTypes.func.isRequired,
  throwNewWarning: PropTypes.func.isRequired,
  causeReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  film: state.search.desiredFilm,
  userID: state.userData._id,
  userTickets: state.userData.tickets,
  userBalance: state.userData.balance,
});

const mapDispatchToProps = dispatch => ({
  searchFilm: filmName => dispatch(getDesiredFilm(filmName)),
  purchaseTicket: (userID, body) => dispatch(buyTicket(userID, body)),
  throwNewWarning: (warningText, warningType) => dispatch(throwWarning(warningText, warningType)),
  causeReset: () => dispatch(causeWarningReset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContainer);
