import React from 'react'
import LeftButton from '../buttons/LeftButton'

const LeftButtonContainer = ({ gridSize, handleTiles }) => {

    const leftButtons = [];
    const containerStyles = {
        gridTemplateRows: `repeat(${gridSize}, 10vmin)`
    }

    for (let i = 0; i < gridSize; i++) {
        leftButtons.push(<LeftButton key={i} id={`left-${i}`} handleTiles={handleTiles} />)
    };

    return (
        <div id="left-button-container" style={containerStyles}>
            {leftButtons}
        </div>
    )
}

export default LeftButtonContainer