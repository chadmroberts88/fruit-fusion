import React from 'react'
import styled from 'styled-components'

const StyledPanelBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75%;
`;

const PanelBody = ({ content }) => {
    return (
        <StyledPanelBody className='panel-body'>
            {content}
        </StyledPanelBody>
    )
}

export default PanelBody