import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import GamePanel from '../containers/GamePanel'
import LogInPanel from '../containers/LogInPanel'
import MenuPanel from '../containers/MenuPanel'
import HowToPlayPanel from '../containers/HowToPlayPanel'
import AccountPanel from '../containers/AccountPanel'
import CreateAccountPanel from '../containers/CreateAccountPanel'
import LeaderboardPanel from '../containers/LeaderboardPanel'
import SettingsPanel from '../containers/SettingsPanel'
import AboutPanel from './AboutPanel'

const Container = styled.div`
	flex-grow: 1;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
	align-items: center;
	justify-items: center;
	height: 100%;
	width: 100%;
	overflow: auto;
`;

const PanelContainer = () => {

	return (
		<Container id="panel-container">
			<Routes>
				<Route path='/' element={<LogInPanel />} />
				<Route path='/account' element={<AccountPanel />} />
				<Route path='/create-account' element={<CreateAccountPanel />} />
				<Route path='/update-account' element={<CreateAccountPanel />} />
				<Route path='/menu' element={<MenuPanel />} />
				<Route path='/how-to-play' element={<HowToPlayPanel />} />
				<Route path='/leaderboard' element={<LeaderboardPanel />} />
				<Route path='/settings' element={<SettingsPanel />} />
				<Route path='/about' element={<AboutPanel />} />
				<Route path='/game' element={<GamePanel />} />
				<Route path='*' />
			</Routes>
		</Container>
	)
}

export default PanelContainer