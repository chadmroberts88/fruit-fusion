import { React, memo } from 'react'
import DownButton from '../components/DownButton'

const DownButtonContainer = ({ gridSize, handleGameClick }) => {

    const containerStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`
    }

    const downButtons = [];

    for (let i = 0; i < gridSize; i++) {
        downButtons.push(<DownButton key={i} id={`down-${i}`} handleGameClick={handleGameClick} />)
    };

    return (
        <div id="down-button-container" style={containerStyles}>
            {downButtons}
        </div>
    )

}

export default memo(DownButtonContainer)