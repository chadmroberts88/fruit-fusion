import React from 'react'
import styled from 'styled-components'

const StyledSecondaryButton = styled.button`
    height: 6vmin;
    width: 30vmin;
    background-color: #a2a2a2;
    color: black;
    border: none;
    border-radius: 10px;
    font-size: 2.5vmin;
    font-weight: bold;
    margin: 2vmin;
    cursor: pointer;

    :hover {
        background-color: lightgrey;
    }

`;

const SecondaryButton = ({ text, handleClick, path }) => {
    return (
        <StyledSecondaryButton onClick={() => { handleClick(path); }}>
            {text}
        </StyledSecondaryButton>
    )
}

export default SecondaryButton