import React, { useContext } from 'react';
import { Modal, Box, IconButton, Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import styled from 'styled-components';
import { GameContext } from '../context/GameContext';

const ModalImage = styled.img`
	justify-self: center;
  width: 30vmin;
  height: 21vmin;
	margin: 1vmin 0;
  content: url(${props => props.imageUrl});
`;

const PlayAgainButton = styled(Button)`
		&& {
			margin-top: 10px;
			text-transform: none;
			background-color: #f25c54;
			width: 100%;

			:hover {
				background-color: #ff847e;
			}
		}
	`;

const GameOverModal = () => {

	const { gameOverModalOpen, closeGameOverModal } = useContext(GameContext);

	const containerStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '80%',
		maxWidth: 300,
		bgcolor: '#96e072',
		borderRadius: '10px',
		boxShadow: 24,
		padding: '20px',
	};

	const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '10px',
	}

	const modalImageUrl = require('../images/game-over.png');

	return (
		<Modal open={gameOverModalOpen} onClose={() => { closeGameOverModal() }}>
			<Box sx={containerStyle}>
				<Box sx={headerStyle}>
					<h2>Game Over...</h2>
					<IconButton onClick={() => { closeGameOverModal() }}><Close /></IconButton>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<ModalImage imageUrl={modalImageUrl} />
				</Box>
				<PlayAgainButton
					variant='contained'
					onClick={() => { closeGameOverModal() }}
				>
					Play Again
				</PlayAgainButton>
			</Box >
		</Modal >
	)
}

export default GameOverModal;