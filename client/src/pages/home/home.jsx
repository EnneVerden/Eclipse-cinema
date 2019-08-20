import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../shared/header/header';
import Title from './components/title';
import FilmsGrid from '../../containers/filmsGrid';
import Pagination from '../../containers/pagination';
import Footer from './components/footer';
import ErrorAlert from '../../containers/alert';

const Home = ({ history }) => (
  <div className="home">
    <Header />
    <Title />
    <FilmsGrid history={history} />
    <Pagination />
    <Footer />
    <ErrorAlert />
  </div>
);

Home.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Home;
