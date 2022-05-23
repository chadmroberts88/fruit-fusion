import React from 'react'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import GameInstructions from '../panelComponents/GameInstructions'
import SecondaryButton from '../panelComponents/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import PanelFrame from '../panelComponents/PanelFrame'

const Content = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
`;

const HowToPlayPanel = () => {

    const navigate = useNavigate();

    const navigateToMenu = () => {
        navigate('/menu');
    }

    return (
        <PanelFrame id="how-to-play-panel">
            <PanelHeader text={'How to Play'} />
            <PanelBody>
                <Content>
                    <GameInstructions />
                </Content>
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={'Back'} handleClick={navigateToMenu} />
            </PanelFooter>
        </PanelFrame>
    )
}

export default HowToPlayPanel