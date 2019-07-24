import { connect } from 'react-redux';

import MyTickets from '../pages/settings/components/profile-tickets';

const mapStateToProps = state => ({
  tickets: state.userData.tickets,
});

export default connect(mapStateToProps)(MyTickets);
