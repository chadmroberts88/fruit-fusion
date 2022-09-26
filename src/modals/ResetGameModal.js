import React, { useContext } from 'react';
import { Modal, Box, Button, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { GameContext } from '../context/GameContext';

const ResetGameModal = ({ open, handleClose }) => {

	const { handleGameAction } = useContext(GameContext);

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

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={containerStyle}>
				<Box sx={headerStyle}>
					<Typography variant='h2'>Reset Game?</Typography>
					<IconButton onClick={() => { handleClose() }}><Close /></IconButton>
				</Box>
				<Typography>
					You are about to throw your fruit in the trash and start a new game.
					Are you sure?
				</Typography>
				<Button
					variant='contained'
					color='secondary'
					sx={buttonStyle}
					onClick={() => {
						handleGameAction('newGame');
						handleClose();
					}}
				>
					Reset
				</Button>
			</Box >
		</Modal >
	)
}

export default ResetGameModal;