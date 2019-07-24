import { connect } from 'react-redux';

import TicketsTable from '../pages/settings/components/ticketsTable';

const mapStateToProps = state => ({
  tickets: state.userData.tickets,
});

export default connect(mapStateToProps)(TicketsTable);
