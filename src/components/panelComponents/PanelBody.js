import React from 'react'
import styled from 'styled-components'

const StyledPanelBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 75%;
`;

const PanelBody = (props) => {
    return (
        <StyledPanelBody>
            {props.children}
        </StyledPanelBody>
    )
}

export default PanelBody