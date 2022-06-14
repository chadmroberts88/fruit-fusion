import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

import Modal from "../../components/modal/Modal";
import PrimaryButton from "../../components/panel/PrimaryButton";

const ResetGameModal = ({ modalOpen, closeModal }) => {
	const { handleGameAction } = useContext(GameContext);
	const navigate = useNavigate();

	return (
		<>
			{" "}
			{modalOpen ? (
				<Modal
					headerText={"Reset Game?"}
					footerButtonText={"Cancel"}
					footerButtonHandler={closeModal}
				>
					<p>
						You are about to throw your fruit in the trash and start a new game.
						Are you sure?
					</p>
					<PrimaryButton
						text={"Reset Game"}
						handleClick={() => {
							handleGameAction('newGame');
							navigate("/game");
						}}
					/>
				</Modal>
			) : null}
		</>
	);
};

export default ResetGameModal;
