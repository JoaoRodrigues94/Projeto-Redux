import React, {useState} from 'react';
import './App.css';

import Intervalo from './Components/Intervalo';
import Media from './Components/Media';
import Soma from './Components/Soma';
import Sorteio from './Components/Sorteio';

// import Card from './Components/Card';

function App() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)

  return (
    <div className='App'>
      <h1>Projeto-Redux</h1>

      <div className='linha'>
        <Intervalo min={min} max={max}></Intervalo>
      </div>

      <div className='linha'>
        {/* <Card title="Card2" green> Teste 2 </Card>
        <Card title="Card3" blue> Teste 3 </Card>
        <Card title="Card4" purple> Teste 4</Card> */}
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  )
}

export default App;
