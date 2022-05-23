import React from 'react'
import styled from 'styled-components'

const StyledPanelBody = styled.div`
    height: 74%;
    width: 100%;
`;

const PanelBody = (props) => {
    return (
        <StyledPanelBody>
            {props.children}
        </StyledPanelBody>
    )
}

export default PanelBody