import { React, useContext } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { UserDataContext } from './context/UserDataContext'
import styled from 'styled-components'

import HowToPage from './pages/HowToPage'
import MenuPage from './pages/MenuPage'
import RegistrationPage from './pages/RegistrationPage'
import LeaderboardPage from './pages/LeaderboardPage'
import SettingsPage from './pages/SettingsPage'
import ErrorPage from './pages/ErrorPanel'

import LoginPage from './pages/LoginPage'
import GamePage from './pages/GamePage'
import ProfilePage from './pages/ProfilePage'
import AccountPage from './pages/AccountPage'
import Protected from './Protected'


const AppContainer = styled.div`
	background-color: ${props => props.bgColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	height: 100%;
	width: 100%;


	h1 {
	color: #F25C54;
	font-size: 2.5rem;
	font-family: 'Titan One', cursive;
	text-shadow: 1px 1px 0 #000;
	text-align: center;
	/* margin: -0.75vmin 0vmin; */
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

	h6 {
		color: #FFFFFF;
		font-size: 0.75rem;
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
					<Route path='/' element={<LoginPage />} />
					<Route path='register' element={<RegistrationPage />} />
					<Route path='*' element={<ErrorPage />} />

					<Route element={<Protected />}>
						<Route path='game' element={<GamePage />} />
						<Route path='menu' element={<MenuPage />} />
						<Route path='profile' element={<ProfilePage />} />
						<Route path='settings' element={<SettingsPage />} />
						<Route path='account' element={<AccountPage />} />
						<Route path='how-to-play' element={<HowToPage />} />
						<Route path='leaderboard' element={<LeaderboardPage />} />
					</Route>

				</Routes>
			</HashRouter>
		</AppContainer>
	)

}

export default App