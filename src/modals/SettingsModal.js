import React, { useState } from 'react';
import { Modal, Box, Switch, FormGroup, FormControlLabel, IconButton, Icon, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

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
		maxWidth: '300px',
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

	const buttonStyle = {
		marginTop: '10px',
		textTransform: 'none',
		width: '100%'
	}

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={containerStyle}>
				<Box sx={headerStyle}>
					<Typography variant='h2'>Settings</Typography>
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
				<LoadingButton
					variant='contained'
					color='secondary'
					sx={buttonStyle}
					loading={isSaving}
					loadingPosition="start"
					startIcon={<Icon>save</Icon>}
					onClick={() => { console.log("Clicked") }}
				>
					Save Changes
				</LoadingButton>
			</Box >
		</Modal >
	)
}

export default SettingsModal;