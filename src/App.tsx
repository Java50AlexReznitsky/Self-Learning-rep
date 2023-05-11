import React from 'react';
import './App.css';
import { CounterUpdater } from './components/CounterUpdater';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { Login } from './components/Login'
import { StateMachine } from './components/StateMachine';


function App() {

  return <div className='counter'>
    {/* <CounterUpdater operand={10} />
    <CounterMultiply factor={2} />
    <CounterSquare /> */}
    <StateMachine />
  </div>
}

export default App;
