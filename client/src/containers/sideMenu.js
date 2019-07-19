import { connect } from 'react-redux';

import SideMenu from '../shared/header/components/sideMenu';
import userLogout from '../actions/userLogout';

const mapStateToProps = state => ({
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenu);
