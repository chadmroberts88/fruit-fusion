import React, { useContext } from 'react';
import { Modal, Box, Switch, FormGroup, FormControlLabel, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { UserContext } from '../context/UserContext';

const SettingsModal = ({ open, handleClose }) => {

	const {
		userId,
		soundOn,
		darkModeOn,
		useSwipeOn,
		setSoundOn,
		setDarkModeOn,
		setUseSwipeOn,
		updateUser,
	} = useContext(UserContext);

	const handleChangeSoundEffects = () => {
		setSoundOn(!soundOn);
		updateUser(userId, { soundOn: !soundOn })
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChangeDarkMode = () => {
		setDarkModeOn(!darkModeOn);
		updateUser(userId, { darkModeOn: !darkModeOn })
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChangeUseSwipe = () => {
		setUseSwipeOn(!useSwipeOn);
		updateUser(userId, { useSwipeOn: !useSwipeOn })
			.catch((error) => {
				console.log(error);
			});
	}

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
							checked={soundOn}
							onChange={() => {
								handleChangeSoundEffects();
							}}
						/>}
					/>
					<FormControlLabel
						label="Dark Mode"
						control={<Switch
							color='success'
							checked={darkModeOn}
							onChange={() => {
								handleChangeDarkMode();
							}}
						/>}
					/>
					<FormControlLabel
						label="Use Swipe"
						control={<Switch
							color='success'
							checked={useSwipeOn}
							onChange={() => {
								handleChangeUseSwipe();
							}}
						/>}
					/>
				</FormGroup>
			</Box >
		</Modal >
	)
}

export default SettingsModal;