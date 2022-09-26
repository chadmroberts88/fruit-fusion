import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import GamePage from './pages/GamePage';
import GlobalStyle from './GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<HashRouter basename='/'>
				<Routes>
					<Route path='game' element={<GamePage />} />
					<Route path='*' element={<Navigate to='game' />} />
				</Routes>
			</HashRouter>
		</>
	)
}

export default App;