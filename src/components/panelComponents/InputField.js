import React from 'react'
import styled from 'styled-components'

const StyledInputField = styled.input`
    height: 5vmin;
    width: 100%;
    padding: 2vmin;
    border: 2px solid #a2a2a2;
    color: black;
    font-family: 'Arimo', sans-serif;
    font-size: 2.5vmin;
    border-radius: 10px;
    text-align: center;

    ::placeholder {
        color: #a2a2a2;
        font-family: 'Arimo', sans-serif;
        font-size: 2.5vmin;
    }

    :focus {
        outline: 2px solid #d35b40;
    }
`;

const InputField = ({ placeholder }) => {
    return (
        <StyledInputField placeholder={placeholder}>
        </StyledInputField>
    )
}

export default InputField