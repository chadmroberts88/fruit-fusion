import React from 'react';
import { Modal, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import styled from 'styled-components';
import LeaderboardEntry from '../components/content/LeaderboardEntry';

const ContentSection = styled.div`
	background-color: ${props => props.bgColor};
	height: 76%;
	padding: 10px;
	border-radius: 0 0 10px 10px;
	overflow: hidden auto;
`;

const LeaderboardHeader = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	grid-template-columns: 20% 38% 30%;
	column-gap: 4%;
	align-items: center;
	padding: 4px 10px;
	border-radius: 10px 10px 0 0;
`;

const LeaderboardHeaderSection = styled.div`
	width: 100%;
	overflow: hidden;
	padding: 0 10px;
	margin-top: 2px;
`;

const Leaderboard = styled.div`
		display: flex;
		flex-direction: column;
		row-gap: 10px;
    height: 100%;
    overflow: hidden overlay;
`;

const LeaderboardModal = ({ open, handleClose }) => {

	const theme = useTheme();

	const containerStyle = {
		position: 'absolute',
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

	let userObjects = [];
	let usersList = JSON.parse(localStorage.getItem("UsersList"));
	Object.entries(usersList).forEach(entry => {
		const [key, value] = entry;
		if (key !== 'Guest') {
			userObjects.push(value);
		}
	});

	let sortedObjects = userObjects.sort((a, b) => b.best - a.best);

	let leaderboardEntries = [
		<LeaderboardEntry key={99} rank={99} username={'Testy'} score={12345} />
	];

	for (let i = 0; i < sortedObjects.length; i++) {
		leaderboardEntries.push(
			<LeaderboardEntry key={i} rank={i + 1} username={sortedObjects[i].username} score={sortedObjects[i].best} />
		)
	}

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={containerStyle}>
				<Box sx={headerStyle}>
					<Typography variant='h2'>Leaderboard</Typography>
					<IconButton onClick={() => { handleClose() }}>
						<Close />
					</IconButton>
				</Box>

				<LeaderboardHeader bgColor={theme.palette.primary.dark}>
					<LeaderboardHeaderSection>
						<Typography variant='h6'>Rank</Typography>
					</LeaderboardHeaderSection>
					<LeaderboardHeaderSection>
						<Typography variant='h6'>Player</Typography>
					</LeaderboardHeaderSection>
					<LeaderboardHeaderSection>
						<Typography variant='h6'>Score</Typography>
					</LeaderboardHeaderSection>
				</LeaderboardHeader>

				<ContentSection bgColor={theme.palette.background.paper}>
					<Leaderboard>
						{leaderboardEntries}
					</Leaderboard>
				</ContentSection>
			</Box >
		</Modal >
	)
}

export default LeaderboardModal;