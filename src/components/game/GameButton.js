import { React, memo } from 'react'
import { BsCaretUpFill, BsCaretDownFill, BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs'
import styled from 'styled-components';
import { keyframes } from 'styled-components'

const heartbeat = keyframes`
from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }

  1% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }

  2% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }

  3% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }

  4%,
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

const StyledGameButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #D35B40;
    font-size: 8vmin;
    background-color: transparent;
    border: none;
    cursor: pointer;
    animation: ${heartbeat} 15s ease-in-out infinite both;
`;

const GameButton = ({ id, buttonDir, handleGameClick }) => {

  let icon = [];

  if (buttonDir === 'up') {
    icon = <BsCaretUpFill />
  }

  if (buttonDir === 'down') {
    icon = <BsCaretDownFill />
  }

  if (buttonDir === 'left') {
    icon = <BsCaretLeftFill />
  }

  if (buttonDir === 'right') {
    icon = <BsCaretRightFill />
  }

  return (
    <StyledGameButton id={id} onClick={() => { handleGameClick(id); }} >
      {icon}
    </StyledGameButton>
  )
}

export default memo(GameButton)