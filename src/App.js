import React, { useContext } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { setTheme } from './Themes';
import GamePage from './pages/GamePage';
import { UserContext } from './context/UserContext';

const App = () => {

	const { darkModeOn } = useContext(UserContext);

	return (
		<ThemeProvider theme={setTheme(darkModeOn ? 'dark' : 'light')}>
			<HashRouter basename='/'>
				<Routes>
					<Route path='game' element={<GamePage />} />
					<Route path='*' element={<Navigate to='game' />} />
				</Routes>
			</HashRouter>
		</ThemeProvider>
	)
}

export default App;