import React from 'react'
import Cell from './Cell'
import Tile from './Tile'


function Board({ gridSize, tiles }) {

    const cellComponents = [];
    const tileComponents = [];

    const boardStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`,
        gridTemplateRows: `repeat(${gridSize}, 10vmin)`,
    }

    const tileColors = ["none", "red", "orange", "yellow", "green", "blue", "purple", "black"]


    // Add Cell and Tile Components

    for (let i = 0; i < gridSize * gridSize; i++) {
        cellComponents.push(<Cell key={i} />);
    }

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (tiles[i][j] !== 0) {
                tileComponents.push(<Tile key={tiles[i][j].id} x={i} y={j} color={tileColors[tiles[i][j].colorCode]} />);
            }
        }
    }


    // Return

    return (
        <div id="board" style={boardStyles}>
            {cellComponents}
            {tileComponents}
        </div >
    )
}

export default Board