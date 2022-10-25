import React from 'react';
import { Modal, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import styled from 'styled-components';

import GameInstructions from '../components/content/GameInstructions';

const ContentSection = styled.div`
	background-color: ${props => props.bgColor};
	flex: 1;
	padding: 10px;
	border-radius: 10px;
	overflow: hidden auto;
`;

const HowToPlayModal = ({ open, handleClose }) => {

	const theme = useTheme();

	const containerStyle = {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '80%',
		height: '60%',
		maxWidth: '600px',
		maxHeight: '600px',
		backgroundColor: 'primary.main',
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
					<Typography variant='h2'>How to Play</Typography>
					<IconButton onClick={() => { handleClose() }}>
						<Close />
					</IconButton>
				</Box>
				<ContentSection bgColor={theme.palette.background.paper}>
					<GameInstructions />
				</ContentSection>
			</Box >
		</Modal >
	)
}

export default HowToPlayModal;