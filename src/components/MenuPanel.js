import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PanelHeader from './PanelHeader'
import PanelFooter from './PanelFooter'
import PanelBody from './PanelBody'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import ToggleSection from './ToggleSection'

const StyledMenuPanel = styled.div`
    background-color: #333232;
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const MenuPanel = ({ handleNewGame }) => {

    const navigate = useNavigate();

    const startNewGame = (path) => {
        handleNewGame();
        navigate(path);
    }

    const bodyContent = [
        <PrimaryButton key={0} buttonText={'New Game'} handleClick={startNewGame} path="/game" />,
        <PrimaryButton key={1} buttonText={'How to Play'} handleClick={navigate} path="/how-to-play" />,
        <PrimaryButton key={2} buttonText={'Leaderboard'} />,
        <PrimaryButton key={3} buttonText={'About'} />,
        <ToggleSection key={4} label={'SOUND EFFECTS'} toggleId={'sound-effects-toggle'} />,
        <ToggleSection key={5} label={'DARK MODE'} toggleId={'dark-mode-toggle'} />,
    ]

    const footerContent = [
        <SecondaryButton key={0} buttonText={'Done'} handleClick={navigate} path="/game" />
    ]

    return (
        <StyledMenuPanel id="menu-panel">
            <PanelHeader text={'Menu'} />
            <PanelBody content={bodyContent} />
            <PanelFooter content={footerContent} />
        </StyledMenuPanel>
    )
}

export default MenuPanel