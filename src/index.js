import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDataProvider from './context/UserDataContext';
import GameProvider from './context/GameContext';
import AuthProvider from './context/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import { setTheme } from './Themes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={setTheme('dark')}>
		<AuthProvider>
			<UserDataProvider>
				<GameProvider>
					<App />
				</GameProvider>
			</UserDataProvider>
		</AuthProvider>
	</ ThemeProvider >
);
