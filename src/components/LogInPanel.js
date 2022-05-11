import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PanelHeader from './PanelHeader'
import PanelFooter from './PanelFooter'
import PanelBody from './PanelBody'
import InputField from './InputField'
import PrimaryButton from './PrimaryButton'
import OptionsLink from './OptionsLink'
import SecondaryButton from './SecondaryButton'

const StyledLogInPanel = styled.div`
    background-color: #333232;
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const LogInPanel = () => {

    const navigate = useNavigate();

    const bodyContent = [
        <InputField key={0} placeholderText={'Username'} />,
        <InputField key={1} placeholderText={'Password'} />,
        <PrimaryButton key={2} buttonText={'Log In'} />,
        <OptionsLink key={3} optionText={'Create Account'} handleClick={navigate} path='/game' />
    ]

    const footerContent = [
        <SecondaryButton key={0} buttonText={'Play as Anonymous'} handleClick={navigate} path='/game' />
    ]

    return (
        <StyledLogInPanel id="log-in-panel">
            <PanelHeader text={'Log In'} />
            <PanelBody content={bodyContent} />
            <PanelFooter content={footerContent} />
        </StyledLogInPanel>
    )
}

export default LogInPanel