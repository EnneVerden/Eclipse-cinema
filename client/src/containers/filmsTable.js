import { connect } from 'react-redux';

import FilmsTable from '../pages/settings/components/filmsTable';

const mapStateToProps = state => ({
  filmsData: state.filmsData,
});

export default connect(mapStateToProps)(FilmsTable);
