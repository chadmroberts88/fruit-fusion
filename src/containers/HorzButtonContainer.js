import { React, memo } from 'react'
import styled from 'styled-components'
import GameButton from '../components/GameButton'

const StyledHorzButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.numCols}, 10vmin);
    width: 100%;
    justify-content: center;
    align-items: center;
    column-gap: 1vmin;
`;

const HorzButtonContainer = ({ gridSize, buttonDir, handleGameClick }) => {

    const buttons = [];

    for (let i = 0; i < gridSize; i++) {
        buttons.push(<GameButton key={`${buttonDir}-${i}`} id={`${buttonDir}-${i}`} buttonDir={buttonDir} handleGameClick={handleGameClick} />)

    };

    return (
        <StyledHorzButtonContainer className="horz-button-container" numCols={gridSize}>
            {buttons}
        </StyledHorzButtonContainer>
    )
}

export default memo(HorzButtonContainer)