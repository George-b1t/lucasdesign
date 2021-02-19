import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import flyer from '../../../assets/flyer.png';
import arrowUp from '../../../assets/arrow-up.svg';
import arrowDown from '../../../assets/arrow-down.svg';

import VestuarioContainer from './VestuarioContainer.jsx';
import LetreiroContainer from './LetreiroContainer.jsx';

export default function FlyerContainer() {
  const [ content, setContent ] = useState();

  useEffect(() => {
    setContent(
      <div id='all-content' className='show-content-projetos'>
        <div className='vestuario-container'>
          <div className='vestuario-content'>
            <img className='projetos-arrow-up' onClick={FtoV} src={arrowUp} alt='arrow'/>
            <h1 className='vestuario-title'>Flyers</h1>
            <div className='field-card-projetos'>
              <div className='flyer-card'>
                <div className='vestuario-card-content flyer-card-content'>
                  <h1 className='flyer-card-title'>
                    Flyers Profissionais
                  </h1>
                  <p className='projetos-card-p1'>Traga personalidade ao se time</p>
                  <p className='projetos-card-p2 flyer-card-p2'><Link to='/contato'>
                    Entre em contato</Link> para fazer seu <span>orçamento</span>!
                  </p>
                </div> 
                <div className='flyer-field-image'>
                  <img src={flyer} alt="camisa"/>
                </div>
              </div>
              <div className='field-points'>
                <img
                className='projetos-arrow-up' 
                onClick={FtoV} src={arrowUp} alt='arrow'/>
                <span className='fp1-f' style={{color: '#959698'}}>●</span>
                <span style={{color: '#FFF'}}>●</span>
                <span className='fp3-f' style={{color: '#959698'}}>●</span>
                <img 
                className='projetos-arrow-down' 
                onClick={FtoL} src={arrowDown} alt='arrow'/>
              </div>
            </div>
            <img className='projetos-arrow-down' onClick={FtoL} src={arrowDown} alt='arrow'/>
          </div>
        </div>
      </div>
    );
  }, []);

  function FtoV() {
    setContent(
      <VestuarioContainer/>
    );
  };

  function FtoL() {
    setContent(
      <LetreiroContainer/>
    );
  };

  return (
    <>
      {content}
    </>
  );
};