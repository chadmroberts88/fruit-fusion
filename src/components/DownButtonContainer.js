import React from 'react'
import DownButton from './DownButton'

function DownButtonContainer({ gridSize, shiftTiles }) {

    const downButtons = [];
    const containerStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`
    }

    for (let i = 0; i < gridSize; i++) {
        downButtons.push(<DownButton key={i} id={`down-${i}`} shiftTiles={shiftTiles} />)
    };

    return (
        <div id="down-button-container" style={containerStyles}>
            {downButtons}
        </div>
    )

}

export default DownButtonContainer