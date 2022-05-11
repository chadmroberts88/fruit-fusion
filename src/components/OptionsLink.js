import React from 'react'
import styled from 'styled-components'

const StyledOptionsLink = styled.a`
    color: #a2a2a2;
    font-family: 'Arimo', sans-serif;
    font-size: 3vmin;
    font-weight: bold;
    margin: 1vmin;
    cursor: pointer;

    :hover {
        color: lightgrey;
    }

`;

const OptionsLink = ({ optionText, handleClick, path }) => {
    return (
        <StyledOptionsLink onClick={() => { handleClick(path); }}>
            {optionText}
        </StyledOptionsLink>
    )
}

export default OptionsLink