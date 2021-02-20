import React from 'react';

export default function ContatoContainer() {
  return (
    <div className='contato-container show-content-projetos'>
      <div className='contato-field-tite'>
        <h1 className='contato-title'>Contato</h1>
      </div>
      <div className='contato-card'>
        <div className='contato-field-card-title'>
          <h1 className='contato-card-title'>
            Para dúvidas ou orçamento, entre em contato:
          </h1>
        </div>
        <div className='contato-field-content'>
          <div className='contato-field-whatsapp'>
            <h1>WhatsApp</h1>
            <a target='_blanck'
            href='https://api.whatsapp.com/send?phone=
            5564999722397&text=Oi%2C%20vim%20pelo%20site!'>
              Prosseguir
            </a>
          </div>
          <div className='contato-div-sep'></div>
          <div className='contato-field-instagram'>
            <h1>Isntagram</h1>
            <a target='_blanck'
            href='https://www.instagram.com/designer_lucas_/'>
              Prosseguir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};