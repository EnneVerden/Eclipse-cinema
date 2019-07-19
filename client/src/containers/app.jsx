import { connect } from 'react-redux';

import App from '../pages/app/App';

const mapStateToProps = state => ({
  email: state.userData.email,
});

export default connect(mapStateToProps)(App);
