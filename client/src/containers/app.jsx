import { connect } from 'react-redux';

import App from '../pages/app/app';

const mapStateToProps = state => ({
  email: state.userData.email,
});

export default connect(mapStateToProps)(App);
