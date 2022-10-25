import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GameProvider from './context/GameContext';
import AuthProvider from './context/AuthContext';
import UserProvider from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<AuthProvider>
		<UserProvider>
			<GameProvider>
				<App />
			</GameProvider>
		</UserProvider>
	</AuthProvider>
);
