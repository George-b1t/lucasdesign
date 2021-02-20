import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/App.css';

import Home from './pages/Home.jsx';
import Projetos from './pages/Projetos.jsx';
import Contato from './pages/Contato.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projetos' component={Projetos}/>
        <Route exact path='/contato' component={Contato}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
