import React from 'react';

const Board = ({ gridSize, cellComponents, tileComponents }) => {

    const boardStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`,
        gridTemplateRows: `repeat(${gridSize}, 10vmin)`,
    }

    return (
        <div id="board" style={boardStyles}>
            {cellComponents}
            {tileComponents}
        </div >
    )
}

export default Board