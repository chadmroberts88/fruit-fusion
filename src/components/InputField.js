import React from 'react'
import styled from 'styled-components'

const StyledInputField = styled.input`
    height: 7vmin;
    width: 38vmin;
    margin: 1vmin;
    padding: 2vmin;
    border: 2px solid #a2a2a2;
    color: black;
    font-family: 'Arimo', sans-serif;
    font-size: 3vmin;
    border-radius: 10px;
    text-align: center;

    ::placeholder {
        color: #a2a2a2;
        font-family: 'Arimo', sans-serif;
        font-size: 3vmin;
    }

    :focus {
        outline: 2px solid #d35b40;
    }
`;

const InputField = ({ placeholderText }) => {
    return (
        <StyledInputField placeholder={placeholderText}>
        </StyledInputField>
    )
}

export default InputField