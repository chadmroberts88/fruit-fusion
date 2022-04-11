import React from 'react'
import UpButton from './UpButton'

function UpButtonContainer({ gridSize, shiftTiles, addTiles }) {

    const upButtons = [];
    const containerStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`
    }

    for (let i = 0; i < gridSize; i++) {
        upButtons.push(<UpButton key={i} id={`up-${i}`} shiftTiles={shiftTiles} addTiles={addTiles} />)
    };

    return (
        <div id="up-button-container" style={containerStyles}>
            {upButtons}
        </div>
    )
}

export default UpButtonContainer