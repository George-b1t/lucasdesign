import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import letreiro from '../../../assets/letreiro.png';
import arrowUp from '../../../assets/arrow-up.svg';

import FlyerContainer from './FlyerContainer.jsx';

export default function LetreiroContainer() {
  const [ content, setContent ] = useState();
  
  useEffect(() => {
    setContent(
      <div id='all-content' className='show-content-projetos'>
        <div className='vestuario-container'>
          <div className='vestuario-content letreiro-content'>
            <img className='projetos-arrow-up' onClick={LtoF} src={arrowUp} alt='arrow'/>
            <h1 className='vestuario-title show-content-projetos'>Letreiros</h1>
            <div className='field-card-projetos'>
              <div className='vestuario-card vestuario-card-l'>
                <div className='vestuario-field-image'>
                  <img className='letreiro-image' src={letreiro} alt="camisa"/>
                </div>
                <div className='vestuario-card-content'>
                  <h1 className='projetos-card-title'>
                    Letreiros Profissionais
                  </h1>
                  <p className='projetos-card-p1 letreiro-card-p1'>Letreiros modernos e chamativos</p>
                  <p className='projetos-card-p2 letreiro-card-p2'><Link to='/contato'>
                    Entre em contato</Link> para fazer seu <span>orçamento</span>!</p>
                </div> 
              </div>
              <div className='field-points'>
                <img className='projetos-arrow-up lateral-arrow'  
                onClick={LtoF} src={arrowUp} alt='arrow'/>
                <span className='fp1-l' style={{color: '#959698'}}>●</span>
                <span style={{color: '#959698'}}>●</span>
                <span className='fp3-l' style={{color: '#FFF'}}>●</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, []);

  function LtoF() {
    setContent(
      <FlyerContainer/>
    );
  };

  return (
    <>
      {content}
    </>
  );
};