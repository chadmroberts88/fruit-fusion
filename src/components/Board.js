import { React } from 'react'
import styled from 'styled-components'
import CellsContainer from '../containers/CellsContainer'
import TilesContainer from '../containers/TilesContainer'

const StyledBoard = styled.div`
    position: relative;
`;

const Board = ({ gridSize, tiles, buttonId }) => {
    return (
        <StyledBoard id="board">
            <CellsContainer gridSize={gridSize}></CellsContainer>
            <TilesContainer gridSize={gridSize} tiles={tiles} buttonId={buttonId}></TilesContainer>
        </StyledBoard>
    )
}

export default Board