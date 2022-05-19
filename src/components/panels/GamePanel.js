import { React } from 'react'
import Dashboard from '../game/Dashboard'
import GameContainer from '../../containers/GameContainer'
import styled from 'styled-components'

const StyledGamePanel = styled.div`
    /* background-color: #333232; */
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const GamePanel = ({ initializeTiles }) => {
    return (
        <StyledGamePanel id="game-panel">
            <Dashboard />
            <GameContainer initializeTiles={initializeTiles} />
        </StyledGamePanel>
    )
}

export default GamePanel