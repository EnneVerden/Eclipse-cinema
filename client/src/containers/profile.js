import { connect } from 'react-redux';

import Profile from '../pages/settings/components/profile';

const mapStateToProps = state => ({
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
});

export default connect(mapStateToProps)(Profile);
