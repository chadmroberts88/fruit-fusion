import { React, memo } from 'react'
import { BsCaretRightFill } from 'react-icons/bs'
import styled from 'styled-components';

const StyledRightButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        color: pink;
        font-size: 8vmin;
        background-color: transparent;
        border: none;
        animation: heartbeat 15s ease-in-out infinite both;
    `;

const RightButton = ({ id, handleGameClick }) => {
    return (
        <StyledRightButton id={id} onClick={() => { handleGameClick(id); }}><BsCaretRightFill /></StyledRightButton>
    )
}

export default memo(RightButton)