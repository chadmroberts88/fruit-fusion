import { React, useContext, useState, useEffect } from 'react'
import { UserDataContext, GamePlayContext } from '../helper/Context'
import styled from 'styled-components'

import moveTiles from '../sounds/moveTiles.mp3'
import incMultiplier from '../sounds/incMultiplier.mp3'
import gameOver from '../sounds/gameOver.mp3'

import BoardSpacer from '../components/game/BoardSpacer'
import GameBoard from '../components/game/GameBoard'
import HorzButtonContainer from './HorzButtonContainer'
import VertButtonContainer from './VertButtonContainer'
import Modal from '../components/modal/Modal'

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    overflow: hidden;
`;

const ModalImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45vmin;
    height: 27vmin;
    content: url(${props => props.imageUrl});
`;

const ModalStats = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 3vmin 0;
`;

const StatsSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const GamePanel = () => {

	const {
		gridSize,
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
		soundOn,
		useSwipeOn,
		setGameInProgress,
		newGame,
		setNewGame,
		initializeTiles
	} = useContext(UserDataContext);

	const gapSize = '1vmin';
	const modalImageUrl = require('../images/game-over.png');

	const [cellSize, setCellSize] = useState(useSwipeOn ? '14vmin' : '12vmin');
	const [modalOpen, setModalOpen] = useState(false);
	const [moveTilesSound] = useState(new Audio(moveTiles));
	const [incMultiplierSound] = useState(new Audio(incMultiplier));
	const [gameOverSound] = useState(new Audio(gameOver));

	useEffect(() => {
		setCellSize(useSwipeOn ? '14vmin' : '12vmin');
	}, [useSwipeOn]);

	const copyTiles = () => {
		let copiedTiles = [];
		for (let i = 0; i < gridSize; i++) {
			copiedTiles[i] = [];
			for (let j = 0; j < gridSize; j++) {
				copiedTiles[i][j] = tiles[i][j];
			}
		}
		return copiedTiles;
	}

	let currentTiles = copyTiles();
	let currentTileIds = tileIds;

	const addToCurrentTiles = (qty) => {

		for (let q = 0; q < qty; q++) {

			let blankCells = [];

			// get blanks cells

			for (let i = 0; i < gridSize; i++) {
				for (let j = 0; j < gridSize; j++) {
					if (currentTiles[i][j] === 0) {
						blankCells.push({ x: i, y: j });
					}
				}
			}

			if (blankCells.length > 0) {
				const randomIndex = Math.floor(Math.random() * blankCells.length);
				const x = blankCells[randomIndex].x;
				const y = blankCells[randomIndex].y;
				const probability = Math.random();
				const newTile = {};

				newTile.id = currentTileIds;
				newTile.colorCode = probability > 0.4 ? 0 : 1;
				newTile.typeCode = Math.floor(Math.random() * 3);
				currentTileIds++;

				currentTiles[x][y] = newTile;
			}
		}

		setTiles(currentTiles);
		setTileIds(currentTileIds);

	}

	const checkForGameover = () => {

		let pairAvailable = false;
		let blankCells = [];

		for (let i = 0; i < gridSize - 1; i++) { // check rows for pairs
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

		for (let i = 0; i < gridSize; i++) { // check columns for pairs
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

		for (let i = 0; i < gridSize; i++) { // get blank cells
			for (let j = 0; j < gridSize; j++) {
				if (currentTiles[i][j] === 0) {
					blankCells.push({ x: i, y: j });
				}
			}
		}

		if (blankCells.length === 0 && !pairAvailable) { // if there are no blank cells and no pairs availabe, game over
			if (soundOn) {
				gameOverSound.play();
			}
			openModal();
		}

	}

	const handleGameAction = (actionId) => {

		if (actionId !== 'none') {
			let line = [];
			let tileMoved = false;
			let blankCells = [];
			let currentScore = score;
			let currentMultiplier = multiplier;
			let currentBest = best;

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
							if (soundOn) {
								// addPointSound.play();
							}

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
				setTiles(currentTiles);
				setScore(currentScore);
				setMultiplier(currentMultiplier);
				setBest(currentBest);

				// get blanks cells

				for (let i = 0; i < gridSize; i++) {
					for (let j = 0; j < gridSize; j++) {
						if (currentTiles[i][j] === 0) {
							blankCells.push({ x: i, y: j });
						}
					}
				}

				// if there is a blank cell and a tile moved, add a tile

				if (blankCells.length > 0 && tileMoved) {
					addToCurrentTiles(1);
				}

				checkForGameover();
			}
		}
	}

	const handleNewGame = () => {
		currentTiles = initializeTiles();
		currentTileIds = 0;
		setNewGame(false);
		setScore(0);
		setMultiplier(1);
		addToCurrentTiles(2);
		setGameInProgress(true);
	}

	const openModal = () => {
		setModalOpen(true);
	}

	const closeModal = () => {
		setNewGame(true);
		setModalOpen(false);
	}

	useEffect(() => {
		if (newGame) {
			handleNewGame();
		}
	});

	return (
		<GamePlayContext.Provider value={{ gridSize, cellSize, gapSize, handleGameAction }}>
			<Container id="game-container">
				<BoardSpacer />
				<HorzButtonContainer buttonDir={'up'} />
				<BoardSpacer />
				<VertButtonContainer buttonDir={'left'} />
				<GameBoard tiles={tiles} />
				<VertButtonContainer buttonDir={'right'} />
				<BoardSpacer />
				<HorzButtonContainer buttonDir={'down'} />
				<BoardSpacer />
			</Container>
			<Modal headerText={"GAME OVER"} modalOpen={modalOpen} closeModal={closeModal}>
				<ModalImage imageUrl={modalImageUrl} />
				<ModalStats>
					<StatsSection>
						<h3>- Score -</h3>
						<h4>{score}</h4>
					</StatsSection>
					<StatsSection>
						<h3>- Best -</h3>
						<h4>{best}</h4>
					</StatsSection>
				</ModalStats>
			</Modal>
		</GamePlayContext.Provider>
	)
}

export default GamePanel
