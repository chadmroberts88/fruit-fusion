import { React, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'

import Modal from '../../components/modal/Modal'

const CreateAccountModal = ({ modalOpen, handleClose }) => {

	const { loggedIn } = useContext(UserDataContext);

	return (
		<> {modalOpen ?
			<Modal
				headerText={loggedIn ? 'Update Successful' : 'Account Created'}
				footerButtonText={'Close'}
				footerButtonHandler={handleClose}
			>
				<p>Your account has been sucessfully {loggedIn ? "updated" : "created"}.</p>

				{
					loggedIn ?
						null :
						<p>The current game has been saved to your account.</p>
				}

			</Modal>
			: null}</>
	)
}

export default CreateAccountModal