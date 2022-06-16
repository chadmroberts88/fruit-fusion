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
				<Route path='/fruit-fusion' element={<LogInPanel />} />
				<Route path='/fruit-fusion/create-account' element={<CreateAccountPanel />} />
				<Route path='/fruit-fusion/update-account' element={<CreateAccountPanel />} />
				<Route path='/fruit-fusion/account' element={loggedIn ? <AccountPanel /> : <MenuPanel />} />
				<Route path='/fruit-fusion/menu' element={<MenuPanel />} />
				<Route path='/fruit-fusion/how-to-play' element={<HowToPlayPanel />} />
				<Route path='/fruit-fusion/leaderboard' element={<LeaderboardPanel />} />
				<Route path='/fruit-fusion/settings' element={<SettingsPanel />} />
				<Route path='/fruit-fusion/about' element={<AboutPanel />} />
				<Route path='/fruit-fusion/game' element={<GamePanel />} />
				<Route path='*' element={<ErrorPanel />} />
			</Routes>
		</Container>
	)
}

export default PanelContainer