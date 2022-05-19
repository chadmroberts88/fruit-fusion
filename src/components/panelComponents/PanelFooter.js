import React from 'react'
import styled from 'styled-components'

const StyledPanelFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15%;
`;

const PanelFooter = (props) => {
    return (
        <StyledPanelFooter className='panel-footer'>
            {props.children}
        </StyledPanelFooter>
    )
}

export default PanelFooter