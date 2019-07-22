import { connect } from 'react-redux';

import Menu from '../pages/settings/components/menu';

const mapStateToProps = state => ({
  status: state.userData.status,
});

export default connect(mapStateToProps)(Menu);
