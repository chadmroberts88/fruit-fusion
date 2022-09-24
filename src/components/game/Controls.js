import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import GameDashboard from './GameDashboard';
import GameMenu from './GameMenu';

const Container = styled.div`
	gap: 6px;

	@media screen and (orientation: landscape){
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 9fr;
	}

	@media screen and (orientation: portrait) {
		display: flex;
		flex-direction: column;
	}
`;

const AccountBox = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: 1fr;
	background-color: #1a7431;
	border-radius: 10px;
	padding: 10px;
`;

const WelcomeBox = styled.div`
	display: flex;
	white-space: nowrap;
	overflow: hidden;

	@media screen and (orientation: landscape){
		flex-direction: column;
		justify-content: center;
	}

	@media screen and (orientation: portrait) {
		flex-direction: row;
		align-items: center;
		gap: 6px;
	}

`;

const RowCol = styled.div`
	gap: 6px;

	@media screen and (orientation: landscape){
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
	}

	@media screen and (orientation: portrait) {
		display: flex;
		flex-direction: column;
	}
`;

const Controls = () => {
	return (
		<Container>
			<AccountBox>
				<WelcomeBox>
					<Typography fontSize='large' fontWeight='bold' color='white'>Welcome: </Typography>
					<Typography color='white' >Some Long Name</Typography>
				</WelcomeBox>
				<button>SignOut</button>
			</AccountBox>
			<RowCol>
				<GameMenu />
				<GameDashboard />
			</RowCol>
		</Container>
	)
}

export default Controls;