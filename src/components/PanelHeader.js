import React from 'react'
import styled from 'styled-components'

const StyledPanelHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
`;

const PanelHeader = ({ text }) => {
    return (
        <StyledPanelHeader className='panel-header'>
            <h2>{text}</h2>
        </StyledPanelHeader>
    )
}

export default PanelHeader