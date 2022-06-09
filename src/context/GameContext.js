import { createContext, useContext, useState, useEffect } from "react"
import { UserDataContext } from '../context/UserDataContext'

import moveTiles from '../sounds/moveTiles.mp3'
import incMultiplier from '../sounds/incMultiplier.mp3'
import gameOver from '../sounds/gameOver.mp3'

export const GameContext = createContext({})

const GameProvider = ({ children }) => {

	const { userData, setUserData, updateUserData, loggedIn } = useContext(UserDataContext);
	const [moveTilesSound] = useState(new Audio(moveTiles));
	const [incMultiplierSound] = useState(new Audio(incMultiplier));
	const [gameOverSound] = useState(new Audio(gameOver));
	const [gridSize] = useState(5);
	const [gapSize] = useState('1vmin');
	const [cellSize, setCellSize] = useState(userData.useSwipeOn ? '14vmin' : '12vmin');
	const [newGame, setNewGame] = useState(false);
	const [gameOverModalOpen, setGameOverModalOpen] = useState(false);

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

	const guestGameTemplate = {
		tiles: initializeTiles(),
		tileIds: 0,
		multiplier: 1,
		score: 0
	}

	if (!localStorage.getItem("GamesList")) {
		localStorage.setItem("GamesList", JSON.stringify({
			Guest: guestGameTemplate
		}));
	}

	let currentUser = JSON.parse(localStorage.getItem("CurrentUser")).username;
	const [gameData, setGameData] = useState(JSON.parse(localStorage.getItem("GamesList"))[currentUser]);

	console.log(gameData);

	const getGamesList = () => {
		return JSON.parse(localStorage.getItem("GamesList"));
	}

	const setGamesList = (gamesList) => {
		localStorage.setItem("GamesList", JSON.stringify(gamesList));
	}

	const updateGameData = (dataObject) => {
		let gamesList = getGamesList(); // get list of games
		Object.entries(dataObject).forEach(entry => {
			const [key, value] = entry;
			gamesList[userData.username][key] = value;
		});
		setGameData(gamesList[userData.username]); // update state
		setGamesList(gamesList); // overwrite games list
	}

	const closeGameOverModal = () => {
		setNewGame(true);
		setGameOverModalOpen(false);
	}

	useEffect(() => {
		setCellSize(userData.useSwipeOn ? '14vmin' : '12vmin');
	}, [userData.useSwipeOn]);

	useEffect(() => {
		if (newGame) {
			handleGameAction('newGame');
		}
	});

	const handleGameAction = (actionId) => {

		let currentTiles = copyTiles();
		let currentTileIds = gameData.tileIds;
		let currentMultiplier = gameData.multiplier;
		let currentScore = gameData.score;
		let currentBest = userData.best;
		let blankCells = getBlankCells();
		let pairAvailable = false;

		function copyTiles() {
			let copiedTiles = [];
			for (let i = 0; i < gridSize; i++) {
				copiedTiles[i] = [];
				for (let j = 0; j < gridSize; j++) {
					copiedTiles[i][j] = gameData.tiles[i][j];
				}
			}
			return copiedTiles;
		}

		function getBlankCells() {
			let blankCells = [];
			for (let i = 0; i < gridSize; i++) {
				for (let j = 0; j < gridSize; j++) {
					if (currentTiles[i][j] === 0) {
						blankCells.push({ x: i, y: j });
					}
				}
			}
			return blankCells;
		}

		function addToCurrentTiles(qty) {

			for (let q = 0; q < qty; q++) {
				blankCells = getBlankCells();
				if (blankCells.length > 0) {
					const randomIndex = Math.floor(Math.random() * blankCells.length);
					const x = blankCells[randomIndex].x;
					const y = blankCells[randomIndex].y;
					const probability = Math.random();
					currentTileIds++;
					currentTiles[x][y] = {
						id: currentTileIds,
						colorCode: probability > 0.4 ? 0 : 1,
						typeCode: Math.floor(Math.random() * 3)
					};
				}
			}

		}

		// handle new game

		if (actionId === 'newGame') {
			currentTiles = initializeTiles();
			currentTileIds = 0;
			currentMultiplier = 1;
			currentScore = 0;
			addToCurrentTiles(2);
			setNewGame(false);
		}

		// handle game click or swipe

		if (actionId !== 'none' && actionId !== 'newGame') {
			let line = [];
			let tileMoved = false;
			let blankCells = [];

			const direction = actionId.split("-", 1);
			const reg = /\d+/g;
			const result = actionId.match(reg);
			const n = parseInt(result[0]);

			// get line (row or col) from the currentTiles array

			if (direction[0] === "left" || direction[0] === "right") {
				for (let i = 0; i < gridSize; i++) {
					line[i] = currentTiles[i][n];
				}

				if (direction[0] === "right") {
					line.reverse();
				}
			}

			if (direction[0] === "up" || direction[0] === "down") {
				for (let i = 0; i < gridSize; i++) {
					line[i] = currentTiles[n][i];
				}

				if (direction[0] === "down") {
					line.reverse();
				}
			}

			// shift all tiles to end

			for (let i = 0; i < gridSize; i++) {
				for (let j = i + 1; j < gridSize; j++) {
					if (line[i] === 0 && line[j] !== 0) {
						line[i] = line[j];
						line[j] = 0;
						tileMoved = true;
					}
				}
			}

			// combine tile pairs

			for (let i = 0; i < gridSize - 1; i++) {
				if (line[i] !== 0) {
					if (line[i].colorCode === line[i + 1].colorCode) {

						if (line[i].colorCode < 6) {

							currentScore = currentScore + ((line[i].colorCode + 1) * 10 * currentMultiplier);
							if (currentScore > currentBest) {
								currentBest = currentScore;
							}

							if (line[i].colorCode === 5) {
								currentMultiplier++;
								if (userData.soundOn) {
									incMultiplierSound.play();
								}
							}

							line[i] = line[i + 1]; // <- needed to ensure an animated move
							line[i].colorCode += 1;
							line[i + 1] = 0;
							tileMoved = true;

						}

					}
				}
			}

			// shift all tiles to end

			for (let i = 0; i < gridSize; i++) {
				for (let j = i + 1; j < gridSize; j++) {
					if (line[i] === 0 && line[j] !== 0) {
						line[i] = line[j];
						line[j] = 0;
						tileMoved = true;
					}
				}
			}

			// copy line back to currentTiles array

			if (direction[0] === "left" || direction[0] === "right") {

				if (direction[0] === "right") {
					line.reverse();
				}

				for (let i = 0; i < gridSize; i++) {
					currentTiles[i][n] = line[i];
				}
			}

			if (direction[0] === "up" || direction[0] === "down") {

				if (direction[0] === "down") {
					line.reverse();
				}

				for (let i = 0; i < gridSize; i++) {
					currentTiles[n][i] = line[i];
				}
			}

			// if a tile moved, play sound, set tiles, score, multiplier, and best

			if (tileMoved) {
				if (userData.soundOn) {
					moveTilesSound.play();
				}

				// if there is a blank cell, add a tile

				blankCells = getBlankCells();
				if (blankCells.length > 0) {
					addToCurrentTiles(1);
				}

				// CHECK FOR GAME OVER
				// check rows for pairs

				for (let i = 0; i < gridSize - 1; i++) {
					for (let j = 0; j < gridSize; j++) {
						if (currentTiles[i][j] !== 0 && currentTiles[i + 1][j] !== 0) {
							if (currentTiles[i][j].colorCode === currentTiles[i + 1][j].colorCode) {
								if (currentTiles[i][j].colorCode !== 6) {
									pairAvailable = true;
								}
							}
						}
					}
				}

				// check columns for pairs

				for (let i = 0; i < gridSize; i++) {
					for (let j = 0; j < gridSize - 1; j++) {
						if (currentTiles[i][j] !== 0 && currentTiles[i][j + 1] !== 0) {
							if (currentTiles[i][j].colorCode === currentTiles[i][j + 1].colorCode) {
								if (currentTiles[i][j].colorCode !== 6) {
									pairAvailable = true;
								}
							}
						}
					}
				}

				// if there are no blank cells and no pairs availabe, game over

				blankCells = getBlankCells();
				if (blankCells.length === 0 && !pairAvailable) {
					if (userData.soundOn) {
						gameOverSound.play();
					}
					setGameOverModalOpen(true);
				}

			}

		}

		updateGameData({
			tiles: currentTiles,
			tileIds: currentTileIds,
			multiplier: currentMultiplier,
			score: currentScore,
		});

		updateUserData({
			best: currentBest
		})

	}

	return (
		<GameContext.Provider
			value={{
				gridSize,
				cellSize,
				gapSize,
				newGame,
				setNewGame,
				handleGameAction,
				gameOverModalOpen,
				closeGameOverModal,
				gameData,
				setGameData,
				initializeTiles
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider