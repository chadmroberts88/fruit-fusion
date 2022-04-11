import React from 'react'
import RightButton from './RightButton'

function RightButtonContainer({ gridSize, shiftTiles }) {

    const rightButtons = [];
    const containerStyles = {
        gridTemplateRows: `repeat(${gridSize}, 10vmin)`
    }

    for (let i = 0; i < gridSize; i++) {
        rightButtons.push(<RightButton key={i} id={`right-${i}`} shiftTiles={shiftTiles} />)
    };

    return (
        <div id="right-button-container" style={containerStyles}>
            {rightButtons}
        </div>
    )
}

export default RightButtonContainer