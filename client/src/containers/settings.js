import { connect } from 'react-redux';

import Settings from '../pages/settings/settings';

const mapStateToProps = state => ({
  status: state.userData.status,
});

export default connect(mapStateToProps)(Settings);
