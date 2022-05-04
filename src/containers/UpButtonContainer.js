import { React, memo } from 'react'
import UpButton from '../components/UpButton'

const UpButtonContainer = ({ gridSize, isNewGame, setIsNewGame, setButtonId }) => {

    const containerStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`
    }

    const upButtons = [];

    for (let i = 0; i < gridSize; i++) {
        upButtons.push(<UpButton key={i} id={`up-${i}`} isNewGame={isNewGame} setIsNewGame={setIsNewGame} setButtonId={setButtonId} />)
    };

    return (
        <div id="up-button-container" style={containerStyles}>
            {upButtons}
        </div>
    )
}

export default memo(UpButtonContainer)