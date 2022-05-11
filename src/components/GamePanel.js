import { React } from 'react'
import Dashboard from './Dashboard'
import GameContainer from '../containers/GameContainer'
import styled from 'styled-components'

const StyledGamePanel = styled.div`
    /* background-color: #333232; */
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const GamePanel = ({ gridSize, tiles, score, level, best, handleGameClick }) => {
    return (
        <StyledGamePanel id="game-panel">
            <Dashboard score={score} level={level} best={best} />
            <GameContainer gridSize={gridSize} tiles={tiles} handleGameClick={handleGameClick} />
        </StyledGamePanel>
    )
}

export default GamePanel