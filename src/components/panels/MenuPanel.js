import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import PrimaryButton from '../panelComponents/PrimaryButton'
import SecondaryButton from '../panelComponents/SecondaryButton'
import ToggleSection from '../panelComponents/ToggleSection'
import { GameContext } from '../../helper/Context'

const Panel = styled.div`
    background-color: #333232;
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const MenuPanel = () => {

    const { setIsNewGame } = useContext(GameContext);

    const navigate = useNavigate();

    const startNewGame = (path) => {
        setIsNewGame(true);
        navigate(path);
    }

    return (
        <Panel id="menu-panel">
            <PanelHeader text={"Menu"} />
            <PanelBody>
                <PrimaryButton text={'New Game'} handleClick={startNewGame} path="/game" />
                <PrimaryButton text={'How to Play'} handleClick={navigate} path="/how-to-play" />
                <PrimaryButton text={'Leaderboard'} />
                <PrimaryButton text={'About'} />
                <ToggleSection label={'Sound Effects'} toggleId={'sound-effects-toggle'} />
                <ToggleSection label={'Dark Mode'} toggleId={'dark-mode-toggle'} />
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={'Done'} handleClick={navigate} path="/game" />
            </PanelFooter>
        </Panel>
    )
}

export default MenuPanel