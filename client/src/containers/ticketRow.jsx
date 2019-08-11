import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TicketRow from '../pages/settings/components/ticketRow';
import { deleteTicket } from '../actions/deleteTicket';

class TicketRowContainer extends PureComponent {
  deleteTicket = () => {
    const { userID, filmID, removeTicket } = this.props;

    removeTicket(userID, { deletedTicket: filmID });
  };

  render() {
    const { ticket } = this.props;

    return <TicketRow ticket={ticket} deleteTicket={this.deleteTicket} />;
  }
}

TicketRowContainer.propTypes = {
  ticket: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  userID: PropTypes.string.isRequired,
  filmID: PropTypes.string.isRequired,
  removeTicket: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userID: state.userData._id,
});

const mapDispatchToProps = dispatch => ({
  removeTicket: (userID, body) => dispatch(deleteTicket(userID, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketRowContainer);
