import { connect } from 'react-redux';

import Dropdown from '../shared/header/components/dropdown';
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
)(Dropdown);
