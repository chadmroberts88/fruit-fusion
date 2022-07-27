import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import { GameContext } from '../context/GameContext'

import Modal from '../components/modal/Modal'
import PrimaryButton from '../components/panel/PrimaryButton'

const DeleteAccountModal = ({ modalOpen, closeModal }) => {

	const { userData, deleteUser } = useContext(UserDataContext);
	const { createGame, deleteGame } = useContext(GameContext);
	const navigate = useNavigate();

	return (
		<>
			{modalOpen ?
				<Modal
					headerText={'Delete Account?'}
					footerButtonText={'Cancel'}
					footerButtonHandler={closeModal}
				>
					<p>Are you sure you would like to delete your Fruit Fusion account?</p>
					<p>All account data including your high-scores and position on the leaderboard will be lost. This data cannot be restored.</p>
					<PrimaryButton
						text={'Delete Account'}
						handleClick={() => {
							deleteGame(userData.username);
							deleteUser(userData.username);
							createGame('Guest');
							closeModal();
							navigate('/');
						}}
					/>
				</Modal>
				: null}
		</>
	)
}

export default DeleteAccountModal