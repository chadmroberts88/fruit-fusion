import React from 'react'
import styled from 'styled-components'

const StyledPrimaryButton = styled.button`
    height: 7vmin;
    width: 34vmin;
    background-color: #d35b40;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 3vmin;
    font-weight: bold;
    margin: 2vmin;
    cursor: pointer;

    :hover {
        background-color: #e86a4e;
    }

`;

const PrimaryButton = ({ text, handleClick, path }) => {

    return (
        <StyledPrimaryButton onClick={() => { handleClick(path); }}>
            {text}
        </StyledPrimaryButton>
    )
}

export default PrimaryButton