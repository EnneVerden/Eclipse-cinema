import React from 'react';

import Header from '../../shared/header/header';
import Title from './components/title';
import FilmsGrid from '../../containers/filmsGrid';
import Pagination from './components/pagination';
import Footer from './components/footer';
import ErrorAlert from '../../containers/alert';

const Home = () => (
  <div className="home">
    <Header />
    <Title />
    <FilmsGrid />
    <Pagination />
    <Footer />
    <ErrorAlert />
  </div>
);

export default Home;
