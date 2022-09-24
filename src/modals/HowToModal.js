import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import GameInstructions from '../components/panel/GameInstructions';
import ContentSection from '../components/panel/ContentSection';

const HowToModal = ({ open, handleClose }) => {

	const containerStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '80%',
		height: '60%',
		maxWidth: '600px',
		maxHeight: '600px',
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
					<h2>How to Play</h2>
					<IconButton onClick={() => { handleClose() }}><Close /></IconButton>
				</Box>
				<ContentSection>
					<GameInstructions />
				</ContentSection>
			</Box >
		</Modal >
	)
}

export default HowToModal;