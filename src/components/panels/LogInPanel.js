import { React, useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import SecondaryButton from '../panelComponents/SecondaryButton'
import PanelFrame from '../panelComponents/PanelFrame'
import LogInForm from '../panelComponents/LogInForm'
import { GameContext } from '../../helper/Context'

const Content = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
`;

const LogInPanel = () => {

    const navigate = useNavigate();

    const { setIsNewGame } = useContext(GameContext);
    const { gameInProgress } = useContext(GameContext);

    const navigateToGame = () => {
        if (!gameInProgress) { setIsNewGame(true); }
        navigate('/game');
    }

    return (
        <PanelFrame id="log-in-panel">
            <PanelHeader text={"Log In"} />
            <PanelBody>
                <Content>
                    <LogInForm />
                </Content>
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={"Play without Account"} handleClick={navigateToGame} />
            </PanelFooter>
        </PanelFrame>
    )
}

export default LogInPanel