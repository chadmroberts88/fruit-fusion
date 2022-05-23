import { React, useContext, useState } from 'react'
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
import Option from '../panelComponents/Option'
import Modal from '../modal/Modal'
import PanelFrame from '../panelComponents/PanelFrame'

const Content = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
`;

const OptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AccountPanel = () => {

    const { best } = useContext(GameContext);
    const navigate = useNavigate();

    const navigateToGame = () => {
        navigate('/game');
    }

    const navigateToUpdate = () => {
        navigate('/create-account');
    }

    const navigateToHome = () => {
        navigate('/');
    }

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const info = [
        {
            label: "Username:",
            data: "JimLahey"
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
        <>
            <PanelFrame id="account-panel">
                <PanelHeader text={"Account"} />
                <PanelBody>
                    <Content>
                        <PhotoSection />
                        <InfoSection info={info} />
                        <OptionsSection>
                            <Option text={"Update Account"} handleClick={navigateToUpdate} />
                            <Option text={"Delete Account"} handleClick={openModal} />
                        </OptionsSection>
                        <PrimaryButton text={"Log Out"} handleClick={navigateToHome} />
                    </Content>
                </PanelBody>
                <PanelFooter>
                    <SecondaryButton text={"Done"} handleClick={navigateToGame} />
                </PanelFooter>
            </PanelFrame>
            <Modal headerText={"Confirm Delete"} modalOpen={modalOpen} closeModal={closeModal}>
                <p>Are you sure you would like to delete your Fruit Fusion account?</p>
                <p>All account data including your high-scores and position on the leaderboard will be lost. This data cannot be restored.</p>
                <PrimaryButton text={"Delete Account"} handleClick={() => { alert("Account Deleted") }} />
            </Modal>
        </>
    )
}

export default AccountPanel