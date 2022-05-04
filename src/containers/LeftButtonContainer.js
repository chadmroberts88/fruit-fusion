import { React, memo } from 'react'
import LeftButton from '../components/LeftButton'

const LeftButtonContainer = ({ gridSize, isNewGame, setIsNewGame, setButtonId }) => {

    const containerStyles = {
        gridTemplateRows: `repeat(${gridSize}, 10vmin)`
    }

    const leftButtons = [];
    for (let i = 0; i < gridSize; i++) {
        leftButtons.push(<LeftButton key={i} id={`left-${i}`} isNewGame={isNewGame} setIsNewGame={setIsNewGame} setButtonId={setButtonId} />)
    };

    return (
        <div id="left-button-container" style={containerStyles}>
            {leftButtons}
        </div>
    )
}

export default memo(LeftButtonContainer)