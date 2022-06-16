import { React, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserDataContext } from "../../context/UserDataContext"

import Modal from "../../components/modal/Modal"
import PrimaryButton from "../../components/panel/PrimaryButton"

const PlayAsGuestModal = ({ modalOpen, handleClose }) => {

	const { updateUserData } = useContext(UserDataContext);
	const navigate = useNavigate();

	const playAsGuest = () => {
		updateUserData({ guestModeConfirmed: true });
		handleClose();
		navigate('/fruit-fusion/menu');
	};

	return (
		<>
			{modalOpen ?
				<Modal
					headerText={"Play as Guest?"}
					footerButtonText={"Log In / Create Account"}
					footerButtonHandler={handleClose}
				>
					<p>
						If you play as a Guest your score will not be posted to the
						leaderboard! Your game progress and stats will also be cleared once
						you leave Fruit Fusion.
					</p>
					<PrimaryButton
						text={"Play as Guest"}
						handleClick={playAsGuest}
					/>
				</Modal>
				: null}
		</>
	);
};

export default PlayAsGuestModal;
