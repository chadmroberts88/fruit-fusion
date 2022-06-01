import { React, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserDataContext } from '../helper/Context'
import styled from 'styled-components'

import GamePanel from '../containers/GamePanel'
import LogInPanel from '../containers/LogInPanel'
import MenuPanel from '../containers/MenuPanel'
import HowToPlayPanel from '../containers/HowToPlayPanel'
import AccountPanel from '../containers/AccountPanel'
import CreateAccountPanel from '../containers/CreateAccountPanel'
import LeaderboardPanel from '../containers/LeaderboardPanel'

const Container = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
	align-self: center;
	height: 100%;
	width: 100%;
`;

const PanelContainer = () => {

	return (
		<Container id="panel-container">
			<Routes>
				<Route path='/' element={<LogInPanel />} />
				<Route path='/account' element={<AccountPanel />} />
				<Route path='/create-account' element={<CreateAccountPanel />} />
				<Route path='/menu' element={<MenuPanel />} />
				<Route path='/how-to-play' element={<HowToPlayPanel />} />
				<Route path='/leaderboard' element={<LeaderboardPanel />} />
				<Route path='/game' element={<GamePanel />} />
				<Route path='*' />
			</Routes>
		</Container>
	)
}

export default PanelContainer