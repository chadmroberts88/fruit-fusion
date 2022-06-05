import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserDataContext } from './helper/Context'
import styled from 'styled-components'

import HeaderContainer from './containers/HeaderContainer'
import PanelContainer from './containers/PanelContainer'

const AppContainer = styled.div`
	background-color: ${props => props.bgColor};
	display: flex;
	align-items: center;
	justify-items: center;
	border: 2px solid white;
	border-radius: 2vmin;

	@media screen and (orientation: landscape){
		height: 90vh;
		width: 88vw;
		flex-direction: row;
	}

	@media screen and (orientation: portrait) {
		height: 86vh;
		width: 90vw;
		flex-direction: column;
	}

	h4 {
		color: ${props => props.textColor};
		font-size: 3vmin;
	}

	h5 {
		color: ${props => props.textColor};
		font-size: 2vmin;
		font-weight: normal;
		height: 2.5vmin;
        overflow: hidden;
        text-align: center;
		margin-top: 0.5vmin;
		margin-bottom: 2vmin;
	}

	h6 {
		color: ${props => props.textColor};
		font-size: 2.5vmin;
	}

	p {
		color: ${props => props.textColor};
		font-size: 1rem;
		margin-bottom: 1.5vmin;
	}

	span {
		color: ${props => props.textColor};
		font-size: 1rem;
        font-weight: bold;
		margin: 1vmin;
	}

`;

const App = () => {

	const [username, setUsername] = useState('Guest');
	const [loggedIn, setLoggedIn] = useState(false);

	const gridSize = 5;
	const userList = {};

	userList[username] = {
		password: null,
		tiles: initializeTiles(),
		tileIds: 0,
		multiplier: 1,
		score: 0,
		best: 0,
		soundOn: true,
		darkModeOn: true,
		useSwipeOn: false,
		newGame: false,
		gameInProgress: false
	};

	let users = localStorage.getItem("Users");
	users = users ? JSON.parse(users) : userList;
	localStorage.setItem("Users", JSON.stringify(users));

	const [password, setPassword] = useState(null);
	const [tiles, setTiles] = useState(initializeTiles());
	const [tileIds, setTileIds] = useState(0);
	const [multiplier, setMultiplier] = useState(1);
	const [score, setScore] = useState(0);
	const [best, setBest] = useState(0);
	const [rank, setRank] = useState(0);
	const [soundOn, setSoundOn] = useState(true);
	const [darkModeOn, setDarkModeOn] = useState(true);
	const [useSwipeOn, setUseSwipeOn] = useState(false);
	const [newGame, setNewGame] = useState(false);
	const [gameInProgress, setGameInProgress] = useState(false);

	useEffect(() => {

		let users = localStorage.getItem("Users");
		users = users ? JSON.parse(users) : {};

		users[username] = {
			password: password,
			tiles: tiles,
			tileIds: tileIds,
			multiplier: multiplier,
			score: score,
			best: best,
			soundOn: soundOn,
			darkModeOn: darkModeOn,
			useSwipeOn: useSwipeOn,
			newGame: newGame,
			gameInProgress: gameInProgress
		}

		localStorage.setItem("Users", JSON.stringify(users));

	}, [username,
		password,
		tiles,
		tileIds,
		multiplier,
		score,
		best,
		soundOn,
		darkModeOn,
		useSwipeOn,
		newGame,
		gameInProgress,
		loggedIn]);

	function initializeTiles() {
		let initialTiles = [];
		for (let i = 0; i < gridSize; i++) {
			initialTiles[i] = [];
			for (let j = 0; j < gridSize; j++) {
				initialTiles[i][j] = 0
			}
		}
		return initialTiles;
	}

	const values = {
		gridSize,
		initializeTiles,
		username,
		setUsername,
		password,
		setPassword,
		tiles,
		setTiles,
		tileIds,
		setTileIds,
		multiplier,
		setMultiplier,
		score,
		setScore,
		best,
		setBest,
		rank,
		setRank,
		soundOn,
		setSoundOn,
		darkModeOn,
		setDarkModeOn,
		useSwipeOn,
		setUseSwipeOn,
		gameInProgress,
		setGameInProgress,
		newGame,
		setNewGame,
		loggedIn,
		setLoggedIn
	}

	return (
		<UserDataContext.Provider value={values}>
			<AppContainer
				id="app"
				bgColor={darkModeOn ? "black" : "#ffffef"}
				textColor={darkModeOn ? "white" : "black"}
			>
				<Router>
					{/* <div className='div1'></div>
					<div className='div2'></div> */}
					<HeaderContainer />
					<PanelContainer />
				</Router>
			</AppContainer>
		</UserDataContext.Provider>
	)

}

export default App