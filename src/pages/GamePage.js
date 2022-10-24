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
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

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

const GamePage = () => {
	const theme = useTheme();

	const { user } = useContext(AuthContext);
	const { userData } = useContext(UserContext);

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

	return (
		<Page bgColor={theme.palette.background.default}>
			<Dashboard menuHandlers={{
				openSettings,
				openHowTo,
				openLeaderboard,
				openReset
			}} />
			<Game />
			<SettingsModal open={settingsOpen} handleClose={closeSettings} userData={userData} />
			<HowToPlayModal open={howToOpen} handleClose={closeHowTo} />
			<LeaderboardModal open={leaderboardOpen} handleClose={closeLeaderboard} />
			<ResetGameModal open={resetOpen} handleClose={closeReset} />
			<GameOverModal />
		</Page>
	)
}

export default GamePage;