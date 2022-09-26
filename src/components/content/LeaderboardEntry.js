import React from 'react';
import { Typography, useTheme } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
`;

const Grid = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	grid-template-columns: 20% 38% 30%;
	column-gap: 4%;
	align-items: center;
	justify-items: center;
	border-radius: 10px;
	padding: 4px 0;
`;

const Section = styled.div`
	display: grid;
	align-items: center;
	width: 100%;
	overflow: hidden;
	padding: 0 10px;
`;

const LeaderboardEntry = ({ rank, username, score }) => {

	const theme = useTheme();

	return (
		<Container>
			<Grid bgColor={theme.palette.secondary.main}>
				<Section>
					<Typography variant='body2'>{rank}</Typography>
				</Section>
				<Section>
					<Typography variant='body2'>{username}</Typography>
				</Section>
				<Section>
					<Typography variant='body2'>{score}</Typography>
				</Section>
			</Grid>
		</Container>
	)
}

export default LeaderboardEntry