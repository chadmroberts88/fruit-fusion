import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import InfoSection from '../components/panel/InfoSection'
import PrimaryButton from '../components/panel/PrimaryButton'
import SecondaryButton from '../components/panel/SecondaryButton'
import PhotoSection from '../components/panel/PhotoSection'
import Option from '../components/panel/Option'
import DeleteAccountModal from '../components/modals/DeleteAccountModal'
import LogOutModal from '../components/modals/LogOutModal'

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

const OptionsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AccountPanel = () => {

	const { userData, setUserData, setLoggedIn, setGuestModeConfirmed } = useContext(UserDataContext);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [logOutModalOpen, setLogOutModalOpen] = useState(false);
	const navigate = useNavigate();

	const logOut = () => {

		let currentUser = { username: 'Guest' };
		localStorage.setItem("CurrentUser", JSON.stringify(currentUser));

		setUserData({
			username: 'Guest',
			password: null,
			multiplier: 1,
			score: 0,
			best: 0,
			rank: 0,
			soundOn: true,
			darkModeOn: true,
			useSwipeOn: false,
		});
		setLoggedIn(false);
		setGuestModeConfirmed(false);
		setLogOutModalOpen(true);
	}

	const closeLogOutModal = () => {
		setLogOutModalOpen(false);
		navigate('/')
	}

	const info = [
		{
			label: "Username:",
			data: userData.username
		},
		{
			label: "Best Score:",
			data: userData.best
		},
		{
			label: "Rank:",
			data: userData.rank
		}
	];

	return (
		<>
			<Panel id="account-panel" bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
				<PanelHeader text={"Account"} />
				<PanelBody>
					<Content>
						<PhotoSection size={'11vmin'} />
						<InfoSection info={info} />
						<PrimaryButton text={"Log Out"} handleClick={() => { logOut() }} />
						<OptionsSection>
							<Option text={"Update Account"} handleClick={() => { navigate('/update-account') }} />
							<Option text={"Delete Account"} handleClick={() => { setDeleteModalOpen(true) }} />
						</OptionsSection>
					</Content>
				</PanelBody>
				<PanelFooter>
					<SecondaryButton text={"Go to Menu"} handleClick={() => { navigate('/menu') }} />
				</PanelFooter>
			</Panel>
			<DeleteAccountModal modalOpen={deleteModalOpen} closeModal={() => { setDeleteModalOpen(false) }} />
			<LogOutModal modalOpen={logOutModalOpen} closeModal={() => { closeLogOutModal() }} />
		</>
	)
}

export default AccountPanel