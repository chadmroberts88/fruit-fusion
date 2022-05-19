import { React, memo } from 'react'
import styled from 'styled-components'
import GameButton from '../components/game/GameButton'

const StyledVertButtonContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.numRows}, 10vmin);
    height: 100%;
    justify-items: center;
    align-content: center;
    row-gap: 1vmin;
`;

const VertButtonContainer = ({ gridSize, buttonDir, handleGameClick }) => {

    const buttons = [];

    for (let i = 0; i < gridSize; i++) {
        buttons.push(<GameButton key={`${buttonDir}-${i}`} id={`${buttonDir}-${i}`} buttonDir={buttonDir} handleGameClick={handleGameClick} />)
    };

    return (
        <StyledVertButtonContainer className="vert-button-container" numRows={gridSize}>
            {buttons}
        </StyledVertButtonContainer>
    )
}

export default memo(VertButtonContainer)