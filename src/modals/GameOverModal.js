import React, { useContext } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { GameContext } from '../context/GameContext';

const ModalImage = styled.img`
	justify-self: center;
  width: 30vh;
  height: 30vh;
	margin: -30px;
  content: url(${props => props.imageUrl});
`;

const GameOverModal = () => {

	const { gameOverModalOpen, closeGameOverModal } = useContext(GameContext);

	const containerStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		outline: 'none',
		pointerEvents: 'none',
	}

	const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '10px',
	}

	const textStyle = {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '2rem',
		textAlign: 'center',
	}

	const modalImageUrl = require('../images/game-over.gif');

	return (
		<Modal open={gameOverModalOpen} onClose={() => { closeGameOverModal() }}>
			<Box sx={containerStyle}>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<ModalImage imageUrl={modalImageUrl} />
				</Box>
				<Box sx={headerStyle}>
					<Typography sx={textStyle}>GAME OVER</Typography>
				</Box>
			</Box >
		</Modal >
	)
}

export default GameOverModal;