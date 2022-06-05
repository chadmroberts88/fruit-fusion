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
import Option from '../components/panel/Option'
import Modal from '../components/modal/Modal'
import SocialLink from '../components/panel/SocialLink'

const Panel = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;

	@media screen and (orientation: landscape) {
		width: 70vmin;
		height: 80vmin;
	}

	@media screen and (orientation: portrait) {
		width: 80vw;
		height: 70vh;
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

const MenuPanel = () => {

	const {
		darkModeOn,
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

	const [newGameModelOpen, setNewGameModalOpen] = useState(false);

	return (
		<Panel id="menu-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={"Menu"} />
			<PanelBody>
				<Content>
					<PrimaryButton text={loggedIn ? 'Account' : 'Log In / Create Account'} handleClick={() => { navigate(loggedIn ? '/account' : '/log-in') }} />
					<PrimaryButton text={'How to Play'} handleClick={() => { navigate('/how-to-play') }} />
					<PrimaryButton text={'Settings'} handleClick={() => { navigate('/settings') }} />
					<PrimaryButton text={'Leaderboard'} handleClick={() => { navigate('/leaderboard') }} />
					<PrimaryButton text={'About'} handleClick={() => { navigate('/about') }} />
					<PrimaryButton text={'Reset Game'} handleClick={() => { setNewGameModalOpen(true) }} />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Go to Game'} handleClick={() => { navigateToGame() }} />
			</PanelFooter>
			<Modal headerText={"Reset Game"} modalOpen={newGameModelOpen} closeModal={() => { setNewGameModalOpen(false) }}>
				<p>You are about to throw your fruit in the trash and start a new game. Are you sure?</p>
				<PrimaryButton text={'Continue'} handleClick={startNewGame} />
			</Modal>
		</Panel >
	)
}

export default MenuPanel