import React from 'react';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  
  return <>
    <div className='row'>
      <div className='column'>
        <Timer cityCountry='Hong Kong' />
        <Timer cityCountry='Vladivostok' />
      </div>
      <div className='column'>
        <Timer cityCountry='Toronto' />
        <Timer cityCountry='New York' />
      </div>
    </div>
  </>
}

export default App;
