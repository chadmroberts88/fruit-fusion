import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import { GameContext } from '../../context/GameContext'

import PanelFrame from '../../components/panel/PanelFrame'
import PanelHeader from '../../components/panel/PanelHeader'
import PanelFooter from '../../components/panel/PanelFooter'
import PanelBody from '../../components/panel/PanelBody'
import InfoSection from '../../components/panel/InfoSection'
import PrimaryButton from '../../components/panel/PrimaryButton'
import SecondaryButton from '../../components/panel/SecondaryButton'
import PhotoSection from '../../components/panel/PhotoSection'
import OptionsSection from '../../components/panel/OptionsSection'
import Option from '../../components/panel/Option'
import DeleteAccountModal from '../modals/DeleteAccountModal'
import LogOutModal from '../modals/LogOutModal'

const AccountPanel = () => {

	const { userData, logOut } = useContext(UserDataContext);
	const { handleGameAction } = useContext(GameContext);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [logOutModalOpen, setLogOutModalOpen] = useState(false);
	const navigate = useNavigate();

	const logUserOut = () => {
		logOut();
		setLogOutModalOpen(true);
	}

	const closeLogOutModal = () => {
		handleGameAction('newGame');
		setLogOutModalOpen(false);
		navigate('/fruit-fusion/')
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
		<>
			<PanelFrame id="account-panel">
				<PanelHeader text={"Account"} />
				<PanelBody>
					<PhotoSection size={'11vmin'} />
					<InfoSection info={info} />
					<PrimaryButton text={"Log Out"} handleClick={logUserOut} />
					<OptionsSection>
						<Option text={"Update Account"} handleClick={() => { navigate('/fruit-fusion/update-account') }} />
						<Option text={"Delete Account"} handleClick={() => { setDeleteModalOpen(true) }} />
					</OptionsSection>
				</PanelBody>
				<PanelFooter>
					<SecondaryButton text={"Go to Menu"} handleClick={() => { navigate('/fruit-fusion/menu') }} />
				</PanelFooter>
			</PanelFrame>
			<DeleteAccountModal modalOpen={deleteModalOpen} closeModal={() => { setDeleteModalOpen(false) }} />
			<LogOutModal modalOpen={logOutModalOpen} handleClose={() => { closeLogOutModal() }} />
		</>
	)
}

export default AccountPanel