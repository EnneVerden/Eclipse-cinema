import React from 'react';

import Header from '../../shared/header/header';
import Info from './components/info';
import FilmsGrid from '../../containers/filmsGrid';
import Pagination from './components/pagination';
import Footer from './components/footer';
import ErrorAlert from '../../containers/alert';

const Home = () => (
  <div className="home">
    <Header />
    <Info />
    <FilmsGrid />
    <Pagination />
    <Footer />
    <ErrorAlert />
  </div>
);

export default Home;
