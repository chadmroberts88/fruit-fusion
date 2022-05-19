import React from 'react'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import GameInstructions from '../panelComponents/GameInstructions'
import SecondaryButton from '../panelComponents/SecondaryButton'
import { useNavigate } from 'react-router-dom'

const Panel = styled.div`
    background-color: #333232;
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const StyledInstructions = styled.div`
    width: 80%;
    height: 100%;
    overflow: hidden scroll;
`

const HowToPlayPanel = () => {

    const navigate = useNavigate();

    return (
        <Panel id="log-in-panel">
            <PanelHeader text={'How to Play'} />
            <PanelBody>
                <GameInstructions />
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={'Back'} handleClick={navigate} path='/menu' />
            </PanelFooter>
        </Panel>
    )
}

export default HowToPlayPanel