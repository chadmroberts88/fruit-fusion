import { React } from 'react'
import styled from 'styled-components'
import Cell from './Cell'
import Tile from './Tile'

const StyledBoard = styled.div`
        display: grid;
        gap: 1vmin;
        background-color: darkgrey;
        border: 2vmin darkgrey solid;
        border-radius: 1vmin;
        position: relative;
    `;

const Board = ({ gridSize, tiles }) => {

    const boardStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`,
        gridTemplateRows: `repeat(${gridSize}, 10vmin)`,
    }

    const cellComponents = [];
    const tileComponents = [];
    const tileColors = ["red", "orange", "yellow", "green", "blue", "purple", "basket"]

    for (let i = 0; i < gridSize * gridSize; i++) {
        cellComponents.push(<Cell key={i} />);
    }

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (tiles[i][j] !== 0) {
                tileComponents.push(<Tile key={tiles[i][j].id} x={i} y={j} color={`${tileColors[tiles[i][j].colorCode]}-${tiles[i][j].typeCode}`} />);
            }
        }
    }

    return (
        <StyledBoard id="board" style={boardStyles}>
            {cellComponents}
            {tileComponents}
        </StyledBoard>
    )
}

export default Board