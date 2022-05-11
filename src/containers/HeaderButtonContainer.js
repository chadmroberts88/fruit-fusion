import React from 'react'
import styled from 'styled-components'

const StyledHeaderButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderButtonContainer = ({ button }) => {
    return (
        <StyledHeaderButtonContainer>
            {button}
        </StyledHeaderButtonContainer>
    )
}

export default HeaderButtonContainer