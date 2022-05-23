import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import PrimaryButton from '../panelComponents/PrimaryButton'
import SecondaryButton from '../panelComponents/SecondaryButton'
import ToggleSection from '../panelComponents/ToggleSection'
import { GameContext, UIContext } from '../../helper/Context'
import Modal from '../modal/Modal'
import SocialLink from '../panelComponents/SocialLink'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import PanelFrame from '../panelComponents/PanelFrame'

const Content = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
`;

const SocialSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 40%;
    margin: 1vmin;
`;

const MenuPanel = () => {

    const { setIsNewGame } = useContext(GameContext);
    const { soundOn, setSoundOn } = useContext(GameContext);
    const { darkModeOn, setDarkModeOn } = useContext(UIContext);

    const navigate = useNavigate();

    const startNewGame = () => {
        setIsNewGame(true);
        navigate('/game');
    }

    const navigateToGame = () => {
        navigate('/game');
    }

    const navigateToHowTo = () => {
        navigate('/how-to-play');
    }

    const navigateToLeaderboard = () => {
        navigate('/leaderboard');
    }

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <PanelFrame id="menu-panel">
                <PanelHeader text={"Menu"} />
                <PanelBody>
                    <Content>
                        <PrimaryButton text={'New Game'} handleClick={startNewGame} />
                        <PrimaryButton text={'How to Play'} handleClick={navigateToHowTo} />
                        <PrimaryButton text={'Leaderboard'} handleClick={navigateToLeaderboard} />
                        <PrimaryButton text={'About'} handleClick={openModal} />
                        <ToggleSection label={'Sound Effects:'} toggleId={'sound-effects-toggle'} isChecked={soundOn} handleToggle={setSoundOn} />
                        <ToggleSection label={'Dark Mode:'} toggleId={'dark-mode-toggle'} isChecked={darkModeOn} handleToggle={setDarkModeOn} />
                    </Content>
                </PanelBody>
                <PanelFooter>
                    <SecondaryButton text={'Done'} handleClick={navigateToGame} />
                </PanelFooter>
            </PanelFrame >
            <Modal headerText={"About"} modalOpen={modalOpen} closeModal={closeModal}>
                <p>Fruit Fusion was developed by Chad Roberts.</p>
                <SocialSection>
                    <SocialLink link={"https://www.linkedin.com/in/chadmroberts88"}>
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink link={"https://github.com/chadmroberts88"}>
                        <FaGithubSquare />
                    </SocialLink>
                </SocialSection>
            </Modal>
        </>
    )
}

export default MenuPanel