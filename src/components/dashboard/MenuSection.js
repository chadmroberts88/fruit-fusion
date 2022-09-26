import React from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, Typography } from '@mui/material';
import { Settings, QuestionMark, Leaderboard, RestartAlt } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	justify-items: center;
	align-items: center;
	gap: 6px;
	border-radius: 10px;
	padding: 6px;

	@media screen and (orientation: landscape) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		height: 100%;
	}

	@media screen and (orientation: portrait) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		width: 100%;
	}
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.div`
	@media screen and (orientation: portrait) {
		display: none;
	}
`;

const MenuSection = ({ menuHandlers }) => {

	const theme = useTheme();

	return (
		<Container bgColor={theme.palette.primary.main}>
			<Section>
				<Heading>
					<Typography variant='h5'>Settings</Typography>
				</Heading>
				<IconButton
					color='secondary'
					size='large'
					onClick={() => { menuHandlers.openSettings() }}
				>
					<Settings fontSize='inherit' />
				</IconButton>
			</Section>

			<Section>
				<Heading>
					<Typography variant='h5'>How To Play</Typography>
				</Heading>
				<IconButton
					color='secondary'
					size='large'
					onClick={() => { menuHandlers.openHowTo() }}
				>
					<QuestionMark fontSize='inherit' />
				</IconButton>
			</Section>

			<Section>
				<Heading>
					<Typography variant='h5'>Leaderboard</Typography>
				</Heading>
				<IconButton
					color='secondary'
					size='large'
					onClick={() => { menuHandlers.openLeaderboard() }}
				>
					<Leaderboard fontSize='inherit' />
				</IconButton>
			</Section>

			<Section>
				<Heading>
					<Typography variant='h5'>Reset Game</Typography>
				</Heading>
				<IconButton
					color='secondary'
					size='large'
					onClick={() => { menuHandlers.openReset() }}
				>
					<RestartAlt fontSize='inherit' />
				</IconButton>
			</Section>
		</Container>
	)
}

export default MenuSection;