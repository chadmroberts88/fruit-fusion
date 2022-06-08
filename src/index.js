import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDataProvider from './context/UserDataContext';
import GameProvider from './context/GameContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<UserDataProvider>
		<GameProvider>
			<App />
		</GameProvider>
	</UserDataProvider>

);
