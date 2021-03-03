import './App.css';
import React from 'react';
import Header from './componentes/Header';
import Jumbotron from './componentes/Jumbotron';
import Cards from './componentes/Cards';
import Final from './componentes/Final';

function App() {
  return (
    <>
      <Header />
      <div className='container p-3'>
        <Jumbotron />
        <Cards />
      </div>
      <Final />
    </>
  );
}

export default App;
