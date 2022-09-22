import React, { useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserDataContext } from './context/UserDataContext';
import styled from 'styled-components';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './amplify.css';
import awsExports from './aws-exports';

import HowToPage from './pages/HowToPage'
import MenuPage from './pages/MenuPage'
import LeaderboardPage from './pages/LeaderboardPage'
import SettingsPage from './pages/SettingsPage'
import ErrorPage from './pages/ErrorPanel'
import GamePage from './pages/GamePage'
import ProfilePage from './pages/ProfilePage'
import AccountPage from './pages/AccountPage'

Amplify.configure(awsExports);

const AppContainer = styled.div`
	background-color: ${props => props.bgColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

const FooterContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	font-size: 0.75rem;
`;

const formFields = {
	signUp: {
		preferred_username: {
			labelHidden: true,
			placeholder: 'Player Name (Shown on leaderboard)',
			isRequired: true,
		}
	}
}

const components = {
	Header() {
		return (<h1>Fruit Fusion</h1>);
	},

	Footer() {
		return (
			<FooterContainer>
				Developed by Chad Roberts.
			</FooterContainer>
		)
	}
}

const App = () => {

	const { userData } = useContext(UserDataContext);

	return (
		<AppContainer
			id="app"
			bgColor={userData.darkModeOn ? "#FEE89C" : "#ffffef"}
			textColor={userData.darkModeOn ? "white" : "black"}
		>
			<Authenticator formFields={formFields} components={components}>
				{({ signOut, user }) => (
					<HashRouter basename='/'>
						<Routes>
							<Route path='game' element={<GamePage />} />
							<Route path='menu' element={<MenuPage />} />
							<Route path='profile' element={<ProfilePage />} />
							<Route path='settings' element={<SettingsPage />} />
							<Route path='account' element={<AccountPage />} />
							<Route path='how-to-play' element={<HowToPage />} />
							<Route path='leaderboard' element={<LeaderboardPage />} />
							<Route path='*' element={<ErrorPage />} />
						</Routes>
					</HashRouter>
				)}
			</Authenticator>
		</AppContainer>
	)

}

export default App