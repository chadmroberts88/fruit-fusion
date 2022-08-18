import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import { GameContext } from '../context/GameContext'
import { RiEdit2Fill } from 'react-icons/ri'
import { MdLeaderboard } from 'react-icons/md'
import styled from 'styled-components'

import PanelContainer from '../components/panel/PanelContainer'
import PanelHeader from '../components/panel/PanelHeader'
import PanelFrame from '../components/panel/PanelFrame'
import PanelBody from '../components/panel/PanelBody'
import CloseButton from '../components/buttons/CloseButton'
import EditButton from '../components/buttons/EditButton'

import PanelFooter from '../components/panel/PanelFooter'
import InfoSection from '../components/panel/InfoSection'
import PrimaryButton from '../components/panel/PrimaryButton'
import SecondaryButton from '../components/panel/SecondaryButton'
import PhotoSection from '../components/panel/PhotoSection'
import OptionsSection from '../components/panel/OptionsSection'
import Option from '../components/panel/Option'
import DeleteAccountModal from '../modals/DeleteAccountModal'
import LogOutModal from '../modals/LogOutModal'

const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const SectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
	margin-bottom: 10px;
`;

const MenuPage = () => {

	const { userData, logOut } = useContext(UserDataContext);
	const { createGame } = useContext(GameContext);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [logOutModalOpen, setLogOutModalOpen] = useState(false);
	const navigate = useNavigate();

	const logOutAndClose = () => {
		logOut();
		createGame('Guest');
		setLogOutModalOpen(false);
		navigate('/')
	}

	const info = [
		{
			label: "Username:",
			data: userData.username
		},
		{
			label: "Best:",
			data: userData.best
		},
		{
			label: "Rank:",
			data: userData.rank
		}
	];

	return (
		<PanelContainer>
			<PanelFrame id="account-page">
				<PanelBody>
					<PanelHeader text={'Player Menu'}>
						<CloseButton path={'/game'} />
					</PanelHeader>

					<Section>
						<SectionHeader>
							<h3>Profile</h3>
							<EditButton path={'/profile'} />
						</SectionHeader>
						<PhotoSection size={'15vmin'} />
						<div>Player Name</div>
					</Section>

					<Section>
						<SectionHeader>
							<h3>Settings</h3>
							<EditButton path={'/settings'} />
						</SectionHeader>
						<div>Sound Effects: ON</div>
						<div>Dark Mode: OFF</div>
						<div>Use Swipe: OFF</div>
					</Section>

					<Section>
						<SectionHeader>
							<h3>Account</h3>
							<EditButton path={'/account'} />
						</SectionHeader>
						<div>Email: someone@someemail.com</div>
						<div>Password: somepassword</div>
					</Section>

					{/* <Option text={"Update Account"} handleClick={() => { navigate('/update-account') }} /> */}
					{/* <Option text={"Delete Account"} handleClick={() => { setDeleteModalOpen(true) }} /> */}
					<PrimaryButton text={"Log Out"} handleClick={() => { setLogOutModalOpen(true); }} disabled={false} />
				</PanelBody>
			</PanelFrame>
			<DeleteAccountModal modalOpen={deleteModalOpen} closeModal={() => { setDeleteModalOpen(false) }} />
			<LogOutModal modalOpen={logOutModalOpen} handleClose={() => { logOutAndClose() }} />
		</PanelContainer>
	)
}

export default MenuPage