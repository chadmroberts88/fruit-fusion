import React from 'react';
import Header from './components/Header';
import GameWrapper from './components/GameWrapper';

function App() {

  let gridSize = 4;

  return (
    <div className="App">
      <Header />
      <GameWrapper gridSize={gridSize} />
    </div >
  )

}

export default App;
