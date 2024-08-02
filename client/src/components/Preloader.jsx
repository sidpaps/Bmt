import React from 'react';
import logo from '@/assets/images/icon.svg';

const Preloader = () => (
  <div className="preloader">
    <img src={logo} alt="Loading..." className="loader-logo" />
  </div>
);

export default Preloader;
