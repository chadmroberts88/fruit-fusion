import React from 'react'
import DownButton from '../buttons/DownButton'

const DownButtonContainer = ({ gridSize, handleTiles }) => {

    const downButtons = [];
    const containerStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`
    }

    for (let i = 0; i < gridSize; i++) {
        downButtons.push(<DownButton key={i} id={`down-${i}`} handleTiles={handleTiles} />)
    };

    return (
        <div id="down-button-container" style={containerStyles}>
            {downButtons}
        </div>
    )

}

export default DownButtonContainer