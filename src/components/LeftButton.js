import { React, memo } from 'react'
import { BsCaretLeftFill } from 'react-icons/bs'
import styled from 'styled-components'

const StyledLeftButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D35B40;
    font-size: 8vmin;
    background-color: transparent;
    border: none;
    animation: heartbeat 15s ease-in-out infinite both;
`;

const LeftButton = ({ id, handleGameClick }) => {
    return (
        <StyledLeftButton id={id} onClick={() => { handleGameClick(id); }}><BsCaretLeftFill /></StyledLeftButton>
    )
}

export default memo(LeftButton)