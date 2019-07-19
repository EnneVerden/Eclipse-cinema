import { connect } from 'react-redux';

import Dropdown from '../shared/header/components/dropdown';

const mapStateToProps = state => ({
  avatar: state.userData.avatar,
  fullName: state.userData.fullName,
  balance: state.userData.balance,
});

export default connect(mapStateToProps)(Dropdown);
