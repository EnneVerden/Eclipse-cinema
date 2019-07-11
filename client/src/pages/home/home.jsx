import React from 'react';

import Header from '../../shared/header/header';
import Info from './components/info';
import FilmsGrid from './components/filmsGrid';
import Pagination from './components/pagination';
import Footer from './components/footer';

const Home = () => (
  <div className="home">
    <Header />
    <Info />
    <FilmsGrid />
    <Pagination />
    <Footer />
  </div>
);

export default Home;
