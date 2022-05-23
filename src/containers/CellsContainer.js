import React from 'react'
import styled from 'styled-components'
import Cell from '../components/game/Cell';

const StyledCellsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.gridSize}, 12vmin);
    grid-template-rows: repeat(${props => props.gridSize}, 12vmin);
    gap: 1vmin;
    background-color: darkgrey;
    border: 2vmin solid darkgrey;
    border-radius: 1vmin;
    position: relative;
    top: 0px;
    left: 0px;
`;

const CellsContainer = ({ gridSize }) => {

    const cellComponents = [];

    for (let i = 0; i < gridSize * gridSize; i++) {
        cellComponents.push(<Cell key={i} />);
    }

    return (
        <StyledCellsContainer id="cells-container" gridSize={gridSize}>
            {cellComponents}
        </StyledCellsContainer>
    )
}

export default CellsContainer