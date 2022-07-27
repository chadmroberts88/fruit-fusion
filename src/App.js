import { React, useContext } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { UserDataContext } from './context/UserDataContext'
import styled from 'styled-components'

import MenuPage from './pages/MenuPage'
import HowToPage from './pages/HowToPage'
import AccountPage from './pages/AccountPage'
import RegistrationPage from './pages/RegistrationPage'
import LeaderboardPage from './pages/LeaderboardPage'
import SettingsPage from './pages/SettingsPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPanel'

import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'


const AppContainer = styled.div`
	background-color: ${props => props.bgColor};
	display: flex;
	align-items: center;
	justify-items: center;
	height: 100%;
	width: 100%;


	h1 {
	color: #9acd32;
	font-size: 10vmin;
	font-family: 'Titan One', cursive;
	text-shadow: 1px 1px 0 #000;
	text-align: center;
	margin: -0.75vmin 0vmin;
	}

	h2 {
		color: #000000;
		font-size: 1.5rem;
	}

	h3 {
		color: #1A7431;
		/* color: #F0FFF2; */
		/* color: #F25C54; */
	}

	h4 {
		color: #F25C54;
	}

	h5 {
		/* color: #1A7431; */
		/* color: #F0FFF2; */
		/* color: #F25C54; */
		color: #000000;
	}



`;

const App = () => {

	const { userData, loggedIn } = useContext(UserDataContext);

	return (
		<AppContainer
			id="app"
			bgColor={userData.darkModeOn ? "#FEE89C" : "#ffffef"}
			textColor={userData.darkModeOn ? "white" : "black"}
		>
			<HashRouter basename='/'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/create-account' element={<RegistrationPage />} />
					<Route path='/update-account' element={<RegistrationPage />} />
					<Route path='/account' element={<AccountPage />} />
					<Route path='/menu' element={<MenuPage />} />
					<Route path='/how-to-play' element={<HowToPage />} />
					<Route path='/leaderboard' element={<LeaderboardPage />} />
					<Route path='/settings' element={<SettingsPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/game' element={<GamePage />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</HashRouter>
		</AppContainer>
	)

}

export default App