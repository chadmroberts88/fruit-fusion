import { React, memo } from 'react'
import { BsCaretLeftFill } from 'react-icons/bs'
import styled from 'styled-components';

const StyledLeftButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        color: pink;
        font-size: 8vmin;
        background-color: transparent;
        border: none;
        animation: heartbeat 15s ease-in-out infinite both;
    `;

const LeftButton = ({ id, isNewGame, setIsNewGame, setButtonId }) => {

    const handleClick = () => {
        setButtonId(id);
        let newGame = isNewGame;
        if (newGame) { newGame = false; }
        setIsNewGame(newGame);
    }

    return (
        <StyledLeftButton id={id} onClick={() => { handleClick(); }}><BsCaretLeftFill /></StyledLeftButton>
    )
}

export default memo(LeftButton)