import { React, useContext, useState } from 'react';
import { UserDataContext } from '../context/UserDataContext';
import styled from 'styled-components';

import GameDashboard from '../components/game/GameDashboard';
import GameContainer from '../components/game/GameContainer';
import GameMenu from '../components/game/GameMenu';
import SettingsModal from '../modals/SettingsModal';
import HowToModal from '../modals/HowToModal';
import LeaderboardModal from '../modals/LeaderboardModal';
import GameOverModal from '../modals/GameOverModal';
import ResetModal from '../modals/ResetModal';
import Controls from '../components/game/Controls';

const Page = styled.div`
	padding: 10px;
	width: 100vw;
	height: 100vh;
	gap: 6px;

	@media screen and (orientation: landscape){
		display: grid;
		grid-template-columns: 2fr 8fr;
		grid-template-rows: 1fr;
	}

	@media screen and (orientation: portrait) {
		display: flex;
		flex-direction: column;
		
		@supports (-webkit-touch-callout: none) {
			height: -webkit-fill-available;
		}
	}

`;

const GamePage = () => {
	const { userData } = useContext(UserDataContext);
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
		<Page id="game-page" bgColor={userData.darkModeOn ? '#000000' : '#E8FCCF'}>
			<Controls />
			<GameContainer />
			<SettingsModal open={settingsOpen} handleClose={closeSettings} />
			<HowToModal open={howToOpen} handleClose={closeHowTo} />
			<LeaderboardModal open={leaderboardOpen} handleClose={closeLeaderboard} />
			<ResetModal open={resetOpen} handleClose={closeReset} />
			<GameOverModal />
		</Page>
	)
}

export default GamePage