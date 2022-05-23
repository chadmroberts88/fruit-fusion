import React from 'react'
import styled from 'styled-components'

const StyledPanelHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12%;
`;

const PanelHeader = ({ text }) => {
    return (
        <StyledPanelHeader className='panel-header'>
            <h2>{text}</h2>
        </StyledPanelHeader>
    )
}

export default PanelHeader