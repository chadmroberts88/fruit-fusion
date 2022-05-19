import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import InfoSection from '../panelComponents/InfoSection'
import PrimaryButton from '../panelComponents/PrimaryButton'
import SecondaryButton from '../panelComponents/SecondaryButton'
import PhotoSection from '../panelComponents/PhotoSection'
import OptionsSection from '../panelComponents/OptionsSection'
import UpdateAccountForm from '../panelComponents/UpdateAccountForm'
import Option from '../panelComponents/Option'

const Panel = styled.div`
    background-color: #333232;
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const UpdateAccountPanel = () => {

    const navigate = useNavigate();

    return (
        <Panel id="account-panel">
            <PanelHeader text={"Update Account"} />
            <PanelBody>
                {/* <PhotoSection /> */}
                {/* <OptionsSection>
                    <Option text={"Remove Photo"} />
                </OptionsSection> */}
                <UpdateAccountForm />
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={"Back"} handleClick={navigate} path='/account' />
            </PanelFooter>
        </Panel>
    )
}

export default UpdateAccountPanel