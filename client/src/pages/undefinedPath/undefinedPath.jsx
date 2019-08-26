import React from 'react';
import { Link } from 'react-router-dom';

const UndefinedPath = () => (
  <section className="undefined">
    <div className="undefined__block">
      <h1 className="undefined__title">Unknown path</h1>
      <img src="https://firebasestorage.googleapis.com/v0/b/eclipse-cinema-b1dd9.appspot.com/o/siteImages%2FundefinedPath.png?alt=media&token=a5fc56cf-8429-4e36-94a6-baaa9e0a27c8" alt="Eclipse" className="undefined__img" />
      <span className="undefined__text">This path does not exists!</span>
      <Link to="/home" className="undefined__link">Go to Home Page</Link>
    </div>
  </section>
);

export default UndefinedPath;
