import { createContext, useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { UserContext } from './UserContext';

import moveTiles from '../sounds/moveTiles.mp3';
import incMultiplier from '../sounds/incMultiplier.mp3';
import gameOver from '../sounds/gameOver.mp3';

export const GameContext = createContext({})

const GameProvider = ({ children }) => {

	const { user } = useContext(AuthContext);
	const {
		best,
		soundOn,
		useSwipeOn,
		setBest,
		setRank,
		updateUser,
		fetchRank,
	} = useContext(UserContext);

	const standardHeaders = {
		'Content-Type': 'application/json',
		'x-api-key': process.env.REACT_APP_API_KEY,
	};

	const [moveTilesSound] = useState(new Audio(moveTiles));
	const [incMultiplierSound] = useState(new Audio(incMultiplier));
	const [gameOverSound] = useState(new Audio(gameOver));
	const [gridSize] = useState(5);
	const [gapSize] = useState('1vmin');
	const [cellSize, setCellSize] = useState('14vmin');
	const [newGame, setNewGame] = useState(true);
	const [gameOverModalOpen, setGameOverModalOpen] = useState(false);
	const [gameData, setGameData] = useState({
		score: 0,
		multiplier: 1,
		tileCount: 2,
		tiles: initializeTiles(2),
	});

	const fetchGame = async (id) => {
		const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/game/${id}`, {
			method: 'GET',
			headers: standardHeaders,
		});
		return response.json();
	};

	const updateGame = async (id, data) => {
		const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}/game/${id}`, {
			method: 'PATCH',
			headers: standardHeaders,
			body: JSON.stringify(data),
		});
		return response.json();
	};

	useEffect(() => {
		setCellSize(useSwipeOn ? '15vmin' : '14vmin');
	}, [useSwipeOn]);

	useEffect(() => {
		if (user !== undefined) {
			fetchGame(user.attributes.sub)
				.then((gameData) => {
					if (gameData.tiles.length === 0) {
						setGameData({
							...gameData,
							tiles: initializeTiles(2)
						});
					} else {
						setGameData(gameData);
					}
				})
				.catch((error) => {
					console.log(error);
				})
		}
	}, [user]);

	function initializeTiles(qty) {

		let initialTiles = [];
		let initialTileCount = 0;

		for (let i = 0; i < gridSize; i++) {
			initialTiles[i] = [];
			for (let j = 0; j < gridSize; j++) {
				initialTiles[i][j] = 0
			}
		}

		for (let q = 0; q < qty; q++) {

			let blankTiles = [];

			for (let i = 0; i < gridSize; i++) {
				for (let j = 0; j < gridSize; j++) {
					if (initialTiles[i][j] === 0) {
						blankTiles.push({ x: i, y: j });
					}
				}
			}

			if (blankTiles.length > 0) {
				const randomIndex = Math.floor(Math.random() * blankTiles.length);
				const x = blankTiles[randomIndex].x;
				const y = blankTiles[randomIndex].y;
				initialTileCount++;
				initialTiles[x][y] = {
					id: initialTileCount,
					colorCode: Math.random() > 0.4 ? 0 : 1,
					typeCode: Math.floor(Math.random() * 3)
				};
			}
		}

		return initialTiles;

	}

	const closeGameOverModal = () => {
		handleGameAction('newGame');
		setGameOverModalOpen(false);
	}

	const handleGameAction = (actionId) => {

		let currentTiles = copyTiles();
		let currentTileCount = gameData.tileCount;
		let currentMultiplier = gameData.multiplier;
		let currentScore = gameData.score;
		let currentBest = best;
		let blankTiles = getBlankTiles();
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

		function getBlankTiles() {
			let blankTiles = [];
			for (let i = 0; i < gridSize; i++) {
				for (let j = 0; j < gridSize; j++) {
					if (currentTiles[i][j] === 0) {
						blankTiles.push({ x: i, y: j });
					}
				}
			}
			return blankTiles;
		}

		function addTiles(qty) {

			for (let q = 0; q < qty; q++) {
				blankTiles = getBlankTiles();
				if (blankTiles.length > 0) {
					const randomIndex = Math.floor(Math.random() * blankTiles.length);
					const x = blankTiles[randomIndex].x;
					const y = blankTiles[randomIndex].y;
					currentTileCount++;
					currentTiles[x][y] = {
						id: currentTileCount,
						colorCode: Math.random() > 0.4 ? 0 : 1,
						typeCode: Math.floor(Math.random() * 3)
					};
				}
			}

		}

		// handle new game

		if (actionId === 'newGame') {
			currentScore = 0;
			currentMultiplier = 1;
			currentTileCount = 2;
			currentTiles = initializeTiles(2);
		}

		// handle game click or swipe

		if (actionId !== 'none' && actionId !== 'newGame') {
			let line = [];
			let tileMoved = false;

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
								if (soundOn) {
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
				if (soundOn) {
					moveTilesSound.play();
				}

				// if there is a blank cell, add a tile

				if (getBlankTiles().length > 0) {
					addTiles(1);
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

				if (getBlankTiles().length === 0 && !pairAvailable) {
					if (soundOn) {
						gameOverSound.play();
					}
					setGameOverModalOpen(true);
				}

			}

		}

		setGameData({
			score: currentScore,
			multiplier: currentMultiplier,
			tileCount: currentTileCount,
			tiles: currentTiles,
		});

		setBest(currentBest);

		updateGame(user.attributes.sub, {
			score: currentScore,
			multiplier: currentMultiplier,
			tileCount: currentTileCount,
			tiles: currentTiles,
		})
			.catch((error) => {
				console.log(error);
			});

		updateUser(user.attributes.sub, {
			best: currentBest,
		})
			.catch((error) => {
				console.log(error);
			});

		fetchRank(user.attributes.sub)
			.then((rank) => {
				setRank(rank);
			})
			.catch((error) => {
				console.log(error);
			});

	};

	return (
		<GameContext.Provider
			value={{
				gridSize,
				cellSize,
				gapSize,
				newGame,
				gameData,
				fetchGame,
				setNewGame,
				handleGameAction,
				gameOverModalOpen,
				closeGameOverModal,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider