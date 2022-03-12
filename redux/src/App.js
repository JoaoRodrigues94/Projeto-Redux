import React from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className='App'>
      <h1>Projeto Redux</h1>

      <div className='linha'>
        <Card/>
      </div>

      <div className='linha'>
        <Card/>
      </div>
    </div>
  )
}

export default App;
