import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';

import Dashboard from '../components/main/Dashboard';
import Game from '../components/main/Game';
import SettingsModal from '../modals/SettingsModal';
import HowToPlayModal from '../modals/HowToPlayModal';
import LeaderboardModal from '../modals/LeaderboardModal';
import GameOverModal from '../modals/GameOverModal';
import ResetGameModal from '../modals/ResetGameModal';
import { UserContext } from '../context/UserContext';
import GlobalStyle from '../GlobalStyles';

const Page = styled.div`
	background-color: ${props => props.bgColor};
	padding: 10px;
	width: 100vw;
	gap: 6px;
	height: fill-available;
	height: -webkit-fill-available;
	height: -moz-fill-available;

	@media screen and (orientation: landscape){
		display: grid;
		grid-template-columns: 2fr 8fr;
		grid-template-rows: 1fr;
	}

	@media screen and (orientation: portrait) {
		display: flex;
		flex-direction: column;
	}

`;

const LoadingGraphicContainer = styled.div`
	background-color: #eaf8e2;		
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoadingImage = styled.img`
	width: 80vw;
	height: 80vw;
	max-width: 400px;
	max-height: 400px;
  content: url(${props => props.imageURL});
`;

const GamePage = () => {
	const theme = useTheme();
	const loadingImageURL = require('../images/loading-graphic.gif');

	const { userId } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(true);
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [howToOpen, setHowToOpen] = useState(false);
	const [leaderboardOpen, setLeaderboardOpen] = useState(false);
	const [resetOpen, setResetOpen] = useState(false);
	const closeSettings = () => { setSettingsOpen(false) };
	const openSettings = () => { setSettingsOpen(true) };
	const closeHowTo = () => { setHowToOpen(false) };
	const openHowTo = () => { setHowToOpen(true) };
	const closeLeaderboard = () => { setLeaderboardOpen(false) };
	const openLeaderboard = () => { setLeaderboardOpen(true) };
	const closeReset = () => { setResetOpen(false) };
	const openReset = () => { setResetOpen(true) };

	useEffect(() => {
		if (userId !== undefined) {
			setIsLoading(false);
		}
	}, [userId])

	return (
		isLoading
			? <LoadingGraphicContainer>
				<LoadingImage imageURL={loadingImageURL} />
			</LoadingGraphicContainer>
			: <>
				<GlobalStyle />
				<Page bgColor={theme.palette.background.default}>
					<Dashboard menuHandlers={{
						openSettings,
						openHowTo,
						openLeaderboard,
						openReset
					}} />
					<Game />
					<SettingsModal open={settingsOpen} handleClose={closeSettings} />
					<HowToPlayModal open={howToOpen} handleClose={closeHowTo} />
					<LeaderboardModal open={leaderboardOpen} handleClose={closeLeaderboard} />
					<ResetGameModal open={resetOpen} handleClose={closeReset} />
					<GameOverModal />
				</Page>
			</>
	)
}

export default GamePage;