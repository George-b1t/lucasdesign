import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import camisa from '../../../assets/camisa.png';
import arrowDown from '../../../assets/arrow-down.svg';

import FlyerContainer from './FlyerContainer.jsx';

export default function VestuarioContainer() {
  const [ content, setContent ] = useState();

  function VtoF() {
    setContent(
      <FlyerContainer/>
    );
  };

  useEffect(() => {
    setContent(
      <div style={{display: 'block'}}>
        <div id='all-content' className='show-content-projetos'>
          <div className='vestuario-container'>
            <div className='vestuario-content extra-space'>
              <h1 className='vestuario-title'>Vestuário</h1>
              <div className='field-card-projetos'>
              <div className='vestuario-card'>
                <div className='vestuario-field-image'>
                  <img src={camisa} alt="camisa"/>
                </div>
                <div className='vestuario-card-content'>
                  <h1 className='projetos-card-title'>
                    Camisa, Calça & Moletom
                  </h1>
                  <p className='projetos-card-p1'>Caracterize à sua maneira</p>
                  <p className='projetos-card-p2'><Link to='/contato'>
                    Entre em contato</Link> para fazer seu <span>orçamento</span>!</p>
                </div>
              </div>
              <div className='field-points'>
                <span className='fp1-v' style={{color: '#FFF'}}>●</span>
                <span style={{color: '#959698'}}>●</span>
                <span className='fp3-v' style={{color: '#959698'}}>●</span>
                <img className='projetos-arrow-down' 
                onClick={VtoF} src={arrowDown} alt='arrow'/>
              </div>
              </div>
              <img className='projetos-arrow-down' onClick={VtoF} src={arrowDown} alt='arrow'/>
            </div>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <>
      {content}
    </>
  );
};