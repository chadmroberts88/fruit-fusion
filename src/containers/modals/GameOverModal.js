import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import { GameContext } from '../../context/GameContext'
import styled from 'styled-components'

import Modal from '../../components/modal/Modal'
import PrimaryButton from '../../components/panel/PrimaryButton'

const ModalImage = styled.img`
	justify-self: center;
    width: 40vmin;
    height: 28vmin;
	margin: 1vmin 0;
    content: url(${props => props.imageUrl});
`;

const ModalStats = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 2vmin 0;
`;

const StatsSection = styled.div`
    display: flex;
    flex-direction: column;
	row-gap: 1vmin;
`;

const GameOverModal = () => {

	const { userData, loggedIn } = useContext(UserDataContext);
	const { gameData, gameOverModalOpen, closeGameOverModal } = useContext(GameContext);
	const navigate = useNavigate();

	const modalImageUrl = require('../../images/game-over.png');

	return (
		<> {gameOverModalOpen ?
			<Modal
				headerText={'Game Over'}
				footerButtonText={'New Game'}
				footerButtonHandler={closeGameOverModal}
			>
				<ModalStats>
					<StatsSection>
						<h3>Score:</h3>
						<h4>{gameData.score}</h4>
					</StatsSection>
					<StatsSection>
						<h3>Best:</h3>
						<h4>{userData.best}</h4>
					</StatsSection>
				</ModalStats>

				{
					loggedIn ?
						<ModalImage imageUrl={modalImageUrl} /> :
						<p>Your score won't be posted to the leaderboard when playing as a Guest. Would you like to create an account so your best score will be saved?</p>
				}

				{
					loggedIn ?
						null :
						<PrimaryButton text={'Create Account'} handleClick={() => { navigate('/create-account') }} />
				}
			</Modal>
			: null}</>
	)
}

export default GameOverModal