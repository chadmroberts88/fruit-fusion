import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../helper/Context'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import PrimaryButton from '../components/panel/PrimaryButton'
import SecondaryButton from '../components/panel/SecondaryButton'
import ToggleSection from '../components/panel/ToggleSection'
import Modal from '../components/modal/Modal'
import SocialLink from '../components/panel/SocialLink'

const Panel = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;
	width: 90%;
	height: 90%;

	@media screen and (orientation: landscape) {
		width: 80vmin;
		height: 80vmin;
	}

`;

const Content = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

const ButtonsSection = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	justify-items: center;
	align-items: center;

	@media screen and (orientation: landscape) {
		grid-template-columns: 50% 50%;
	}

	@media screen and (max-width: 425px) {
		grid-template-columns: 100%;
	}

`;

const ColumnSpan = styled.div`
	grid-column: 1 / span 2;

	@media screen and (max-width: 425px) {
		grid-column: 1 /span 1;
	}
`;

const SocialSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 40%;
    margin: 1vmin;
`;

const MenuPanel = () => {

	const {
		soundOn,
		setSoundOn,
		darkModeOn,
		setDarkModeOn,
		useSwipeOn,
		setUseSwipeOn,
		setNewGame,
		gameInProgress,
		loggedIn
	} = useContext(UserDataContext);

	const navigate = useNavigate();

	const startNewGame = () => {
		setNewGame(true);
		navigate('/game');
	}

	const navigateToGame = () => {
		if (!gameInProgress) { setNewGame(true); }
		navigate('/game');
	}

	const [aboutModalOpen, setAboutModalOpen] = useState(false);
	const [newGameModelOpen, setNewGameModalOpen] = useState(false);

	return (
		<Panel id="menu-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={"Menu"} />
			<PanelBody>
				<Content>
					<ButtonsSection>
						<PrimaryButton text={'New Game'} handleClick={() => { setNewGameModalOpen(true) }} />
						<PrimaryButton text={loggedIn ? 'Account' : 'Log In'} handleClick={() => { navigate(loggedIn ? '/account' : '/') }} />
						<PrimaryButton text={'How to Play'} handleClick={() => { navigate('/how-to-play') }} />
						<PrimaryButton text={'Leaderboard'} handleClick={() => { navigate('/leaderboard') }} />
						<ColumnSpan>
							<PrimaryButton text={'About'} handleClick={() => { setAboutModalOpen(true) }} />
						</ColumnSpan>
					</ButtonsSection>
					<ToggleSection label={'Sound Effects:'} toggleId={'sound-effects-toggle'} isChecked={soundOn} handleToggle={setSoundOn} />
					<ToggleSection label={'Dark Mode:'} toggleId={'dark-mode-toggle'} isChecked={darkModeOn} handleToggle={setDarkModeOn} />
					<h4>For touch screens only:</h4>
					<ToggleSection label={'Use Swipe:'} toggleId={'use-swipe-toggele'} isChecked={useSwipeOn} handleToggle={setUseSwipeOn} />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Continue to Game'} handleClick={() => { navigateToGame() }} />
			</PanelFooter>
			<Modal headerText={'About'} modalOpen={aboutModalOpen} closeModal={() => { setAboutModalOpen(false) }}>
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
			<Modal headerText={"Confirm New Game"} modalOpen={newGameModelOpen} closeModal={() => { setNewGameModalOpen(false) }}>
				<p>You are about to throw your fruit in the trash and start a new game. Are you sure?</p>
				<PrimaryButton text={'Continue'} handleClick={startNewGame} />
			</Modal>
		</Panel>
	)
}

export default MenuPanel