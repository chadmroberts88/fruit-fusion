import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserDataContext } from './helper/Context'
import styled from 'styled-components'

import HeaderContainer from './containers/HeaderContainer'
import PanelContainer from './containers/PanelContainer'

const AppContainer = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	grid-template-columns: 96vw;
	grid-template-rows: 12vh 82vh;
	row-gap: 2vh;
	column-gap: 2vw;
	border: 2px solid white;
	border-radius: 2vmin;

	@media screen and (orientation: landscape){
		grid-template-columns: 14vw 80vw;
		grid-template-rows: 96vh;
	}

	h4 {
		color: ${props => props.h3Color};
		font-size: 3vmin;
	}

	h5 {
		color: ${props => props.pColor};
		font-size: 2vmin;
		font-weight: normal;
		height: 2.5vmin;
        overflow: hidden;
        text-align: center;
		margin-top: 0.5vmin;
		margin-bottom: 2vmin;
	}

	p {
		color: ${props => props.pColor};
		font-size: 2.5vmin;
		margin-bottom: 1.5vmin;
	}

	span {
		color: ${props => props.pColor};
        font-size: 2.5vmin;
        font-weight: bold;
		margin: 1vmin;
	}

`;

const App = () => {

	const [username, setUsername] = useState('guest');
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
				h3Color={darkModeOn ? "white" : "black"}
				pColor={darkModeOn ? "white" : "black"}
			>
				<Router>
					<HeaderContainer />
					<PanelContainer />
				</Router>
			</AppContainer>
		</UserDataContext.Provider>
	)

}

export default App