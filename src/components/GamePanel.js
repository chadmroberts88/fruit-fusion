import { React } from 'react'
import Dashboard from './Dashboard'
import GameContainer from '../containers/GameContainer'

const GamePanel = ({ isNewGame, setIsNewGame, score, setScore, level, setLevel, best, setBest }) => {

    return (
        <div className="game-panel">
            <Dashboard score={score} level={level} best={best} />
            <GameContainer isNewGame={isNewGame} setIsNewGame={setIsNewGame} score={score} setScore={setScore} level={level} setLevel={setLevel} />
        </div>
    )
}

export default GamePanel