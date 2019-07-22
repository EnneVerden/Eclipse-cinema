import { connect } from 'react-redux';

import Films from '../pages/settings/components/films';

const mapStateToProps = state => ({
  filmsData: state.filmsData,
});

export default connect(mapStateToProps)(Films);
