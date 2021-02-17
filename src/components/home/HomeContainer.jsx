import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import smoke from '../../assets/smoke.svg';
import arrowRight from '../../assets/arrow-right.svg';

export default function HomeContainer() {
  return (
    <div className='home-container'>
      <div className='home-main-content'>
        <div className='field-home-logo'>
          <img className='home-logo' src={logo} alt="logo"/>
        </div>
        <div className='field-logo-smoke'>
          <h1 className='home-title-1'>Lucas</h1>
          <h1 className='home-title-2'>Designer</h1>
          <img src={smoke} alt='smoke'/>
        </div>
      </div>
      <div className='home-to-work'>
        <Link to='/projetos'>CONHEÇA O MEU TRABALHO
        <div><img src={arrowRight} alt='arrow'/></div>
        </Link>
      </div>
    </div>
  );
};