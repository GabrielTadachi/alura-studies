import React from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario/index';
import Lista from '../components/Lista';
import './style.scss';

function App() {
  return (
    <div className="AppStyle">
      <Formulario></Formulario>
      <Lista></Lista>
    </div>
  );
}

export default App;
