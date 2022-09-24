import React, { useContext } from 'react';
import { Modal, Box, Button, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import styled from 'styled-components';
import { GameContext } from '../context/GameContext';

const ResetButton = styled(Button)`
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

const ResetModal = ({ open, handleClose }) => {

	const { handleGameAction } = useContext(GameContext);

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

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={containerStyle}>
				<Box sx={headerStyle}>
					<h2>Reset Game</h2>
					<IconButton onClick={() => { handleClose() }}><Close /></IconButton>
				</Box>
				<Typography>
					You are about to throw your fruit in the trash and start a new game.
					Are you sure?
				</Typography>
				<ResetButton
					variant='contained'
					onClick={() => {
						handleGameAction('newGame');
						handleClose();
					}}
				>
					Reset
				</ResetButton>
			</Box >
		</Modal >
	)
}

export default ResetModal;