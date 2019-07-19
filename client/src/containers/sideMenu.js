import { connect } from 'react-redux';

import SideMenu from '../shared/header/components/sideMenu';

const mapStateToProps = state => ({
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
});

export default connect(mapStateToProps)(SideMenu);
