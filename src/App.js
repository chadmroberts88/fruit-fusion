import { React, useState } from 'react'
import HeaderContainer from './containers/HeaderContainer'
import PanelContainer from './containers/PanelContainer'

const App = () => {

  const [isNewGame, setIsNewGame] = useState(true);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [best, setBest] = useState(0);

  return (
    <div className="App">
      <HeaderContainer />
      <PanelContainer isNewGame={isNewGame} setIsNewGame={setIsNewGame} score={score} setScore={setScore} level={level} setLevel={setLevel} best={best} setbest={setBest} />
    </div >
  )

}

export default App;
