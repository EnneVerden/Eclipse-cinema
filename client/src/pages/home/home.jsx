import React from 'react';

import Header from '../../shared/header/Header';
import Info from './components/info';
import FilmsGrid from '../../containers/filmsGrid';
import Pagination from './components/pagination';
import Footer from './components/footer';
import BalanceErrorAlert from '../../shared/alerts/balance';

const Home = () => (
  <div className="home">
    <Header />
    <Info />
    <FilmsGrid />
    <Pagination />
    <Footer />
    <BalanceErrorAlert />
  </div>
);

export default Home;
