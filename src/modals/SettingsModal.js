import React, { useState } from 'react';
import { Modal, Box, Switch, FormGroup, FormControlLabel, IconButton, Icon } from '@mui/material';
import { Close } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import styled from 'styled-components';

const SubmitButton = styled(LoadingButton)`
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

const SettingsModal = ({ open, handleClose }) => {

	const [isSaving] = useState(false);
	const [soundEffectsOn, setSoundEffectsOn] = useState(true);
	const [darkModeOn, setDarkModeOn] = useState(true);
	const [useSwipeOn, setUseSwipeOn] = useState(true);

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
					<h2>Settings</h2>
					<IconButton onClick={() => { handleClose() }}><Close /></IconButton>
				</Box>
				<FormGroup>
					<FormControlLabel
						label="Sound Effects"
						control={<Switch
							color='success'
							checked={soundEffectsOn}
							onChange={() => { setSoundEffectsOn(!soundEffectsOn) }}
						/>}
					/>
					<FormControlLabel
						label="Dark Mode"
						control={<Switch
							color='success'
							checked={darkModeOn}
							onChange={() => { setDarkModeOn(!darkModeOn) }}
						/>}
					/>
					<FormControlLabel
						label="Use Swipe"
						control={<Switch
							color='success'
							checked={useSwipeOn}
							onChange={() => { setUseSwipeOn(!useSwipeOn) }}
						/>}
					/>
				</FormGroup>
				<SubmitButton
					variant='contained'
					loading={isSaving}
					loadingPosition="start"
					startIcon={<Icon>save</Icon>}
					onClick={() => { console.log("Clicked") }}
				>
					Save Changes
				</SubmitButton>
			</Box >
		</Modal >
	)
}

export default SettingsModal;