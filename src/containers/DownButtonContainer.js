import { React, memo } from 'react'
import DownButton from '../components/DownButton'

const DownButtonContainer = ({ gridSize, isNewGame, setIsNewGame, setButtonId }) => {

    const containerStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`
    }

    const downButtons = [];

    for (let i = 0; i < gridSize; i++) {
        downButtons.push(<DownButton key={i} id={`down-${i}`} isNewGame={isNewGame} setIsNewGame={setIsNewGame} setButtonId={setButtonId} />)
    };

    return (
        <div id="down-button-container" style={containerStyles}>
            {downButtons}
        </div>
    )

}

export default memo(DownButtonContainer)