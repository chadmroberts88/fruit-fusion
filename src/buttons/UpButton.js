import React from 'react';
import { BsCaretUpFill } from 'react-icons/bs';
import styled from 'styled-components';

const StyledUpButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: pink;
    font-size: 8vmin;
    background-color: transparent;
    border: none;
    animation: heartbeat 15s ease-in-out infinite both;
`;

const UpButton = ({ id, handleTiles }) => {
    return (
        <StyledUpButton id={id} onClick={() => { handleTiles(id); }}><BsCaretUpFill /></StyledUpButton>
    )
}

export default UpButton