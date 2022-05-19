import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import InputField from '../panelComponents/InputField'
import PrimaryButton from '../panelComponents/PrimaryButton'
import NavigationLink from '../panelComponents/NavigationLink'
import SecondaryButton from '../panelComponents/SecondaryButton'
import OptionsSection from '../panelComponents/OptionsSection'

const Panel = styled.div`
    background-color: #333232;
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const LogInPanel = () => {

    const navigate = useNavigate();

    const options = [
        {
            text: "Create Account",
            path: '/game'
        }
    ]

    return (
        <Panel id="log-in-panel">
            <PanelHeader text={"Log In"} />
            <PanelBody>
                <InputField placeholderText={"Username"} />
                <InputField placeholderText={"Password"} />
                <PrimaryButton text={"Log In"} handleClick={navigate} />
                <OptionsSection options={options} />
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={"Play as Anonymous"} handleClick={navigate} path='/menu' />
            </PanelFooter>
        </Panel>
    )
}

export default LogInPanel