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

const UpButtonContainer = ({ gridSize, handleTiles }) => {

    const upButtons = [];
    const containerStyles = {
        gridTemplateColumns: `repeat(${gridSize}, 10vmin)`
    }

    for (let i = 0; i < gridSize; i++) {
        const id = `up-${i}`;
        upButtons.push(<StyledUpButton key={i} id={id} onClick={() => { handleTiles(id); }}><BsCaretUpFill /></StyledUpButton>)
    };

    return (
        <div id="up-button-container" style={containerStyles}>
            {upButtons}
        </div>
    )
}

export default UpButtonContainer