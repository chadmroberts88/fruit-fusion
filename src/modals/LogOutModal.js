import { React } from 'react'
import Modal from '../components/modal/Modal'

const LogOutModal = ({ modalOpen, handleClose }) => {

	return (
		<> {modalOpen ?
			<Modal
				headerText={'Logged Out'}
				footerButtonText={'Close'}
				footerButtonHandler={handleClose}
			>
				<p>You have been logged out of Fruit Fusion.</p>
				<p>You will be redirected to the Log In page.</p>
				<p>Thanks for playing!</p>
			</Modal>
			: null}</>
	)
}

export default LogOutModal