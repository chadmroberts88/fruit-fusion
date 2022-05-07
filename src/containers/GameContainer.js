import { React, useState, useCallback } from 'react'
import Spacer from '../components/Spacer'
import UpButtonContainer from './UpButtonContainer'
import LeftButtonContainer from './LeftButtonContainer'
import RightButtonContainer from './RightButtonContainer'
import DownButtonContainer from './DownButtonContainer'
import Board from '../components/Board'
import moveTiles from '../sounds/moveTiles.wav'
import addPoint from '../sounds/addPoint.wav'
import newLevel from '../sounds/newLevel.wav'
import gameOver from '../sounds/gameOver.wav'

const GameContainer = ({ isNewGame, setIsNewGame, score, setScore, level, setLevel }) => {

    const gridSize = 5;

    const moveTilesSound = new Audio(moveTiles);
    const addPointSound = new Audio(addPoint);
    const newLevelSound = new Audio(newLevel);
    const gameOverSound = new Audio(gameOver);

    const initializeTiles = () => {
        let initialTiles = [];
        for (let i = 0; i < gridSize; i++) {
            initialTiles[i] = [];
            for (let j = 0; j < gridSize; j++) {
                initialTiles[i][j] = 0
            }
        }
        return initialTiles;
    }

    const [tiles, setTiles] = useState(initializeTiles());
    const [tileIds, setTileIds] = useState(0);

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
        let gameOver = false;
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
            gameOverSound.play();
            gameOver = true;
            console.log("Game Over");
        }

        return gameOver;

    }

    const handleNewGame = (isNewGame) => {
        currentTiles = initializeTiles();
        addToCurrentTiles(2);
        setIsNewGame(false);
        setScore(0);
        setLevel(1);
    }

    const handleGameClick = useCallback((buttonId) => {

        if (buttonId !== 'none') {
            let line = [];
            let tileMoved = false;
            let blankCells = [];
            let currentScore = score;
            let currentLevel = level;

            const direction = buttonId.split("-", 1);
            const reg = /\d+/g;
            const result = buttonId.match(reg);
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

                        if (line[i].colorCode === 5) {
                            currentLevel++;
                            newLevelSound.play();
                        }

                        if (line[i].colorCode < 6) {
                            currentScore = currentScore + ((line[i].colorCode + 1) * 10 * currentLevel);
                            line[i].colorCode += 1;
                            line[i + 1] = 0;
                            tileMoved = true;
                            addPointSound.play();
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

            // if a tile moved, play sound, set tiles, score, and level

            if (tileMoved) {
                moveTilesSound.play();
                setTiles(currentTiles);
                setScore(currentScore);
                setLevel(currentLevel);


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

                setIsNewGame(checkForGameover());
            }
        }
    }, [])

    return (
        <div id="game-container">
            <Spacer />
            <UpButtonContainer gridSize={gridSize} handleGameClick={handleGameClick} />
            <Spacer />
            <LeftButtonContainer gridSize={gridSize} handleGameClick={handleGameClick} />
            <Board gridSize={gridSize} tiles={tiles} />
            <RightButtonContainer gridSize={gridSize} handleGameClick={handleGameClick} />
            <Spacer />
            <DownButtonContainer gridSize={gridSize} handleGameClick={handleGameClick} />
            <button onClick={() => { handleNewGame(); }}>New Game</button>
        </div>
    )
}


export default GameContainer
