import React from 'react'
import GamePanel from '../components/GamePanel'

const PanelContainer = ({ isNewGame, setIsNewGame, score, setScore, level, setLevel, best, setBest }) => {

    return (
        <div className="panel-container">
            <GamePanel isNewGame={isNewGame} setIsNewGame={setIsNewGame} score={score} setScore={setScore} level={level} setLevel={setLevel} best={best} setbest={setBest} />
        </div>
    )
}

export default PanelContainer