import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../../helper/Context'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import InfoSection from '../panelComponents/InfoSection'
import PrimaryButton from '../panelComponents/PrimaryButton'
import SecondaryButton from '../panelComponents/SecondaryButton'
import PhotoSection from '../panelComponents/PhotoSection'
import OptionsSection from '../panelComponents/OptionsSection'
import NavigationLink from '../panelComponents/NavigationLink'

const Panel = styled.div`
    background-color: #333232;
    height: 84vmin;
    width: 76vmin;
    padding: 1vmin;
    border-radius: 10px;
`;

const AccountPanel = () => {

    const { best } = useContext(GameContext);
    const navigate = useNavigate();

    const info = [
        {
            label: "Username:",
            data: "johnappleseed"
        },
        {
            label: "Best Score:",
            data: best
        },
        {
            label: "Top Level:",
            data: 1
        },
    ];

    return (
        <Panel id="account-panel">
            <PanelHeader text={"Account"} />
            <PanelBody>
                <PhotoSection />
                <OptionsSection>
                    <NavigationLink text={"Update Account"} path={'/update-account'} />
                    <NavigationLink text={"Delete Account"} path={'/menu'} />
                </OptionsSection>
                <InfoSection info={info} />
                <PrimaryButton text={"Log Out"} />
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={"Done"} handleClick={navigate} path='/game' />
            </PanelFooter>
        </Panel>
    )
}

export default AccountPanel