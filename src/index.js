import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDataProvider from './context/UserDataContext';
import GameProvider from './context/GameContext';
import AuthProvider from './context/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import { setTheme } from './Themes';
import UserProvider from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={setTheme('dark')}>
		<AuthProvider>
			<UserProvider>
				<UserDataProvider>
					<GameProvider>
						<App />
					</GameProvider>
				</UserDataProvider>
			</UserProvider>
		</AuthProvider>
	</ ThemeProvider >
);
