import React, { useContext } from 'react';
import { Modal, Box, IconButton, Button, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
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
		width: '80%',
		maxWidth: 300,
		bgcolor: 'primary.main',
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

	const buttonStyle = {
		marginTop: '10px',
		textTransform: 'none',
		width: '100%'
	}

	const modalImageUrl = require('../images/game-over.gif');

	return (
		<Modal open={gameOverModalOpen} onClose={() => { closeGameOverModal() }}>
			<Box sx={containerStyle}>
				<Box sx={headerStyle}>
					<Typography variant='h2'>Game Over...</Typography>
					<IconButton onClick={() => { closeGameOverModal() }}><Close /></IconButton>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<ModalImage imageUrl={modalImageUrl} />
				</Box>
				<Button
					variant='contained'
					color='secondary'
					sx={buttonStyle}
					onClick={() => { closeGameOverModal() }}
				>
					Play Again
				</Button>
			</Box >
		</Modal >
	)
}

export default GameOverModal;