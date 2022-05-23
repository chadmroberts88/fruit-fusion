import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import SecondaryButton from '../panelComponents/SecondaryButton'
import CreateAccountForm from '../panelComponents/CreateAccountForm'
import PanelFrame from '../panelComponents/PanelFrame'

const Content = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
`;

const CreateAccountPanel = () => {

    const navigate = useNavigate();

    const navigateToAccount = () => {
        navigate('/account');
    }

    return (
        <PanelFrame id="account-panel">
            <PanelHeader text={"Create Account"} />
            <PanelBody>
                <Content>
                    <CreateAccountForm />
                </Content>
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={"Back"} handleClick={navigateToAccount} />
            </PanelFooter>
        </PanelFrame>
    )
}

export default CreateAccountPanel