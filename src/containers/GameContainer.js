import { React } from 'react'
import Spacer from '../components/Spacer'
import styled from 'styled-components'
import HorzButtonContainer from './HorzButtonContainer'
import VertButtonContainer from './VertButtonContainer'
import Board from '../components/Board'

const StyledGameContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    overflow: hidden;
`;

const GameContainer = ({ gridSize, tiles, handleGameClick }) => {

    return (
        <StyledGameContainer id="game-container">
            <Spacer />
            <HorzButtonContainer gridSize={gridSize} buttonDir={'up'} handleGameClick={handleGameClick} />
            <Spacer />
            <VertButtonContainer gridSize={gridSize} buttonDir={'left'} handleGameClick={handleGameClick} />
            <Board gridSize={gridSize} tiles={tiles} />
            <VertButtonContainer gridSize={gridSize} buttonDir={'right'} handleGameClick={handleGameClick} />
            <Spacer />
            <HorzButtonContainer gridSize={gridSize} buttonDir={'down'} handleGameClick={handleGameClick} />
        </StyledGameContainer>
    )
}

export default GameContainer
