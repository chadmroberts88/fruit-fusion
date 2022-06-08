import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelBody from '../components/panel/PanelBody'
import PanelFooter from '../components/panel/PanelFooter'
import PrimaryButton from '../components/panel/PrimaryButton'
import SecondaryButton from '../components/panel/SecondaryButton'
import Option from '../components/panel/Option'
import ResetGameModal from '../components/modals/ResetGameModal'

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
	justify-self: center;
    display: grid;
    justify-items: center;
    align-items: center;
	width: 90%;
	border: 1px solid #a2a2a2;
	border-radius: 10px;
	padding: 2vmin;
`;

const UserSection = styled.div`
	display: grid;
	row-gap: 1vmin;
	justify-items: center;
`;

const OptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MenuPanel = () => {

	const { userData, loggedIn } = useContext(UserDataContext);
	const [resetGameModelOpen, setResetGameModalOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<Panel id="menu-panel" bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={"Menu"} />
			<PanelBody>
				<Content>
					<UserSection>
						<h3>Currently Playing As:</h3>
						<h4>{userData.username}</h4>
					</UserSection>
					<PrimaryButton text={'Go to Game'} handleClick={() => { navigate('/game') }} />
					<OptionsSection>
						<Option text={'Reset Game'} handleClick={() => { setResetGameModalOpen(true) }} />
						<Option text={'How to Play'} handleClick={() => { navigate('/how-to-play') }} />
						<Option text={'Settings'} handleClick={() => { navigate('/settings') }} />
						<Option text={'Leaderboard'} handleClick={() => { navigate('/leaderboard') }} />
						<Option text={'About Fruit Fusion'} handleClick={() => { navigate('/about') }} />
					</OptionsSection>
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={loggedIn ? 'Go to Account' : 'Log In / Create Account'} handleClick={() => { navigate(loggedIn ? '/account' : '/') }} />
			</PanelFooter>
			<ResetGameModal modalOpen={resetGameModelOpen} closeModal={() => { setResetGameModalOpen(false) }} />
		</Panel >
	)
}

export default MenuPanel