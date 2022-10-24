import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { GameContext } from '../../context/GameContext';
import { Typography, useTheme } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	gap: 6px;

	@media screen and (orientation: landscape) {
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-columns: 1fr;
	}

	@media screen and (orientation: portrait) {
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;

const Section = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	column-gap: 1vmin;
	width: 100%;
	justify-items: center;
	align-items: center;
  padding: 6px;
	white-space: nowrap;
	border-radius: 10px;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr;
`;

const StatsSection = () => {

	const { userData, rank } = useContext(UserContext);
	const { gameData } = useContext(GameContext);
	const theme = useTheme();

	return (
		<Container>
			<Section bgColor={theme.palette.primary.main}>
				<Typography variant='h5'>Multiplier</Typography>
				<Typography variant='h4'>{`X ${gameData.multiplier}`}</Typography>
			</Section>

			<Section bgColor={theme.palette.primary.main}>
				<Typography variant='h5'>Score</Typography>
				<Typography variant='h4'>{gameData.score}</Typography>
			</Section>

			<Section bgColor={theme.palette.primary.main}>
				<Typography variant='h5'>Best</Typography>
				<Typography variant='h4'>{userData.best}</Typography>
			</Section>

			<Section bgColor={theme.palette.primary.main}>
				<Typography variant='h5'>Rank</Typography>
				<Typography variant='h4'>{rank}</Typography>
			</Section>
		</Container>
	)
}

export default StatsSection;
