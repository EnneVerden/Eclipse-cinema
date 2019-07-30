import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TicketsTable from '../pages/settings/components/ticketsTable';
import { deleteTicket } from '../actions/deleteTicket';

class TicketsTableContainer extends Component {
  deleteTicket = (filmID) => {
    const { userID, removeTicket } = this.props;

    removeTicket(`api/user/${userID}`, { deletedTicket: filmID });
  };

  render() {
    const { tickets } = this.props;

    return <TicketsTable tickets={tickets} deleteTicket={this.deleteTicket} />;
  }
}

TicketsTableContainer.propTypes = {
  tickets: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  userID: PropTypes.string.isRequired,
  removeTicket: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userID: state.userData._id,
  tickets: state.userData.tickets,
});

const mapDispatchToProps = dispatch => ({
  removeTicket: (url, body) => dispatch(deleteTicket(url, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketsTableContainer);
