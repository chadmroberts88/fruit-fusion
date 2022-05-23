import { React } from 'react'
import Dashboard from '../game/Dashboard'
import GameContainer from '../../containers/GameContainer'
import styled from 'styled-components'
import Modal from '../modal/Modal'

const StyledGamePanel = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    column-gap: 2%;
    height: 100%;

    @media screen and (orientation: portrait) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        row-gap: 2%;
    }
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