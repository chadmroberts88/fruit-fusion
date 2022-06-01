import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../helper/Context'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import InfoSection from '../components/panel/InfoSection'
import PrimaryButton from '../components/panel/PrimaryButton'
import SecondaryButton from '../components/panel/SecondaryButton'
import PhotoSection from '../components/panel/PhotoSection'
import Option from '../components/panel/Option'
import Modal from '../components/modal/Modal'

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
    height: 100%;
`;

const OptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AccountPanel = () => {

	const {
		best,
		rank,
		darkModeOn,
		username,
		setUsername,
		setPassword,
		setTiles,
		setTileIds,
		setMultiplier,
		setScore,
		setBest,
		setSoundOn,
		setDarkModeOn,
		setUseSwipeOn,
		setGameInProgress,
		setNewGame,
		setLoggedIn,
	} = useContext(UserDataContext);

	const [modalOpen, setModalOpen] = useState(false);
	const navigate = useNavigate();

	const logOut = () => {

		let users = JSON.parse(localStorage.getItem("Users"));

		setLoggedIn(false);
		setUsername('guest');
		setPassword(users['guest'].password);
		setTiles(users['guest'].tiles);
		setTileIds(users['guest'].tileIds);
		setMultiplier(users['guest'].multiplier);
		setScore(users['guest'].score);
		setBest(users['guest'].best);
		setSoundOn(users['guest'].soundOn);
		setDarkModeOn(users['guest'].darkModeOn);
		setUseSwipeOn(users['guest'].useSwipeOn);
		setGameInProgress(users['guest'].gameInProgress);
		setNewGame(users['guest'].setNewGame);
		navigate('/');
	}

	const deleteAccount = () => {

		let users = localStorage.getItem("Users");
		users = users ? JSON.parse(users) : {};

		delete users[username];

		localStorage.setItem("Users", JSON.stringify(users));

		setUsername(null);
		setPassword(null);
		setLoggedIn(false);
		navigate('/');
	}

	const info = [
		{
			label: "Username:",
			data: username
		},
		{
			label: "Best Score:",
			data: best
		},
		{
			label: "Rank:",
			data: rank
		}
	];

	return (
		<>
			<Panel id="account-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
				<PanelHeader text={"Account"} />
				<PanelBody>
					<Content>
						<PhotoSection />
						<InfoSection info={info} />
						<OptionsSection>
							<Option text={"Update Account"} handleClick={() => { navigate('/create-account') }} />
							<Option text={"Delete Account"} handleClick={() => { setModalOpen(true) }} />
						</OptionsSection>
						<PrimaryButton text={"Log Out"} handleClick={() => { logOut() }} />
					</Content>
				</PanelBody>
				<PanelFooter>
					<SecondaryButton text={"Menu"} handleClick={() => { navigate('/menu') }} />
				</PanelFooter>
			</Panel>
			<Modal headerText={"Confirm Delete"} modalOpen={modalOpen} closeModal={() => { setModalOpen(false) }}>
				<p>Are you sure you would like to delete your Fruit Fusion account?</p>
				<p>All account data including your high-scores and position on the leaderboard will be lost. This data cannot be restored.</p>
				<PrimaryButton text={"Continue"} handleClick={() => { deleteAccount() }} />
			</Modal>
		</>
	)
}

export default AccountPanel