import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PanelHeader from './PanelHeader'
import PanelFooter from './PanelFooter'
import PanelBody from './PanelBody'
import Instructions from './Instructions'
import SecondaryButton from './SecondaryButton'

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
            <PanelBody content={<Instructions />} />
            <PanelFooter content={<SecondaryButton buttonText={'Back'} handleClick={navigate} path='/menu' />} />
        </Panel>
    )
}

export default HowToPlayPanel