import { React, memo } from 'react'
import RightButton from '../components/RightButton'

const RightButtonContainer = ({ gridSize, isNewGame, setIsNewGame, setButtonId }) => {

    const containerStyles = {
        gridTemplateRows: `repeat(${gridSize}, 10vmin)`
    }

    const rightButtons = [];

    for (let i = 0; i < gridSize; i++) {
        rightButtons.push(<RightButton key={i} id={`right-${i}`} isNewGame={isNewGame} setIsNewGame={setIsNewGame} setButtonId={setButtonId} />)
    };

    return (
        <div id="right-button-container" style={containerStyles}>
            {rightButtons}
        </div>
    )
}

export default memo(RightButtonContainer)