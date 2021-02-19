import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <div style={{display: 'block'}}>
    <div className='header'>
      <div className='left-header'>
        <div className='field-logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='guide'>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/projetos'>PROJETOS</Link></li>
            <li><Link to='/contato'>CONTATO</Link></li>
        </ul>
        </div>
      </div>
      <div className='right-header'>
        <a href='https://www.instagram.com/designer_lucas_/' 
        target='_blanck' className='field-insta'>
        <AiOutlineInstagram/>
        </a>
      </div>
    </div>
    </div>
  );
};