import { React, memo } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import styled from 'styled-components'

const StyledDownButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        color: pink;
        font-size: 8vmin;
        background-color: transparent;
        border: none;
        animation: heartbeat 15s ease-in-out infinite both;
    `;

const DownButton = ({ isNewGame, setIsNewGame, id, setButtonId }) => {

    const handleClick = () => {
        setButtonId(id);
        let newGame = isNewGame;
        if (newGame) { newGame = false; }
        setIsNewGame(newGame);
    }

    return (
        <StyledDownButton id={id} onClick={() => { handleClick(); }}><BsCaretDownFill /></StyledDownButton>
    )
}

export default memo(DownButton)