import { React, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import GamePanel from '../../containers/panels/GamePanel'
import LogInPanel from '../../containers/panels/LogInPanel'
import MenuPanel from '../../containers/panels/MenuPanel'
import HowToPlayPanel from '../../containers/panels/HowToPlayPanel'
import AccountPanel from '../../containers/panels/AccountPanel'
import CreateAccountPanel from '../../containers/panels/CreateAccountPanel'
import LeaderboardPanel from '../../containers/panels/LeaderboardPanel'
import SettingsPanel from '../../containers/panels/SettingsPanel'
import AboutPanel from '../../containers/panels/AboutPanel'
import ErrorPanel from '../panels/ErrorPanel'

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

	const { loggedIn } = useContext(UserDataContext);

	return (
		<Container id="panel-container">
			<Routes>
				<Route path='/' element={<LogInPanel />} />
				<Route path='/create-account' element={<CreateAccountPanel />} />
				<Route path='/update-account' element={<CreateAccountPanel />} />
				<Route path='/account' element={loggedIn ? <AccountPanel /> : <MenuPanel />} />
				<Route path='/menu' element={<MenuPanel />} />
				<Route path='/how-to-play' element={<HowToPlayPanel />} />
				<Route path='/leaderboard' element={<LeaderboardPanel />} />
				<Route path='/settings' element={<SettingsPanel />} />
				<Route path='/about' element={<AboutPanel />} />
				<Route path='/game' element={<GamePanel />} />
				<Route path='*' element={<ErrorPanel />} />
			</Routes>
		</Container>
	)
}

export default PanelContainer