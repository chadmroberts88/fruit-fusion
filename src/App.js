import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import moveTiles from './sounds/moveTiles.wav';
import addPoint from './sounds/addPoint.wav';
import newLevel from './sounds/newLevel.wav';
import gameOver from './sounds/gameOver.wav';
import GameContainer from './containers/GameContainer';
import Cell from './components/Cell';
import Tile from './components/Tile';

const App = () => {

  const gridSize = 5;
  const moveTilesSound = new Audio(moveTiles);
  const addPointSound = new Audio(addPoint);
  const newLevelSound = new Audio(newLevel);
  const gameOverSound = new Audio(gameOver);

  const setInitalTiles = () => {
    let tempArr = [];
    for (let i = 0; i < gridSize; i++) {
      tempArr[i] = [];
      for (let j = 0; j < gridSize; j++) {
        tempArr[i][j] = 0
      }
    }
    return tempArr;
  }

  // Hooks

  const [tileIds, setTileIds] = useState(0);
  const [tiles, setTiles] = useState(setInitalTiles());
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => { addTiles(2); }, []);

  // Set Board Layout

  const addTiles = (qty) => {

    let tempArr = [];
    let tempIds = tileIds;

    for (let i = 0; i < gridSize; i++) {
      tempArr[i] = [];
      for (let j = 0; j < gridSize; j++) {
        tempArr[i][j] = tiles[i][j];
      }
    }

    for (let i = 0; i < qty; i++) {
      const blankCells = [];
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (tempArr[i][j] === 0) {
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

        newTile.id = tempIds;
        newTile.colorCode = probability > 0.4 ? 0 : 1;
        newTile.typeCode = Math.floor(Math.random() * 3);
        tempIds++;

        tempArr[x][y] = newTile;
      }
    }

    setTiles(tempArr);
    setTileIds(tempIds);
  }


  // Functions

  const handleTiles = (buttonId) => {
    const direction = buttonId.split("-", 1);
    const reg = /\d+/g;
    const result = buttonId.match(reg);
    const n = parseInt(result[0]);

    let tempArr = [];
    let line = [];
    let tempIds = tileIds;
    let tileMoved = false;
    let tempScore = score;
    let tempLevel = level;

    for (let i = 0; i < gridSize; i++) {
      tempArr[i] = [];
      for (let j = 0; j < gridSize; j++) {
        tempArr[i][j] = tiles[i][j];
      }
    }

    if (direction[0] === "left" || direction[0] === "right") {
      for (let i = 0; i < gridSize; i++) {
        line[i] = tempArr[i][n];
      }

      if (direction[0] === "right") {
        line.reverse();
      }
    }

    if (direction[0] === "up" || direction[0] === "down") {
      for (let i = 0; i < gridSize; i++) {
        line[i] = tempArr[n][i];
      }

      if (direction[0] === "down") {
        line.reverse();
      }
    }

    for (let i = 0; i < gridSize; i++) {
      for (let j = i + 1; j < gridSize; j++) {
        if (line[i] === 0 && line[j] !== 0) {
          line[i] = line[j];
          line[j] = 0;
          tileMoved = true;
        }
      }
    }

    for (let i = 0; i < gridSize - 1; i++) {
      if (line[i] !== 0) {
        if (line[i].colorCode === line[i + 1].colorCode) {

          if (line[i].colorCode === 5) {
            tempLevel++;
            newLevelSound.play();
          }

          if (line[i].colorCode < 6) {
            tempScore = tempScore + ((line[i].colorCode + 1) * 10 * tempLevel);
            line[i].colorCode += 1;
            line[i + 1] = 0;
            tileMoved = true;
            addPointSound.play();
          }

        }
      }
    }

    for (let i = 0; i < gridSize; i++) {
      for (let j = i + 1; j < gridSize; j++) {
        if (line[i] === 0 && line[j] !== 0) {
          line[i] = line[j];
          line[j] = 0;
          tileMoved = true;
        }
      }
    }

    if (direction[0] === "left" || direction[0] === "right") {

      if (direction[0] === "right") {
        line.reverse();
      }

      for (let i = 0; i < gridSize; i++) {
        tempArr[i][n] = line[i];
      }
    }

    if (direction[0] === "up" || direction[0] === "down") {

      if (direction[0] === "down") {
        line.reverse();
      }

      for (let i = 0; i < gridSize; i++) {
        tempArr[n][i] = line[i];
      }
    }

    // Get all blank cells

    const blankCells = [];
    let blankCellAvailable = true;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (tempArr[i][j] === 0) {
          blankCells.push({ x: i, y: j });
        }
      }
    }

    // If blank cell, add tile

    if (tileMoved && blankCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * blankCells.length);
      const x = blankCells[randomIndex].x;
      const y = blankCells[randomIndex].y;
      const probability = Math.random();
      const newTile = {};

      newTile.id = tempIds;
      newTile.colorCode = probability > 0.4 ? 0 : 1;
      newTile.typeCode = Math.floor(Math.random() * 3);
      tempIds++;

      tempArr[x][y] = newTile;
      moveTilesSound.play();

      if (blankCells.length === 1) {
        blankCellAvailable = false;
      }

    }

    // Check for game over

    let pairAvailable = false;

    for (let i = 0; i < gridSize - 1; i++) { // check rows for pairs
      for (let j = 0; j < gridSize; j++) {
        if (tempArr[i][j] !== 0 && tempArr[i + 1][j] !== 0) {
          if (tempArr[i][j].colorCode === tempArr[i + 1][j].colorCode) {
            if (tempArr[i][j].colorCode !== 6) {
              pairAvailable = true;
            }
          }
        }
      }
    }

    for (let i = 0; i < gridSize; i++) { // check columns for pairs
      for (let j = 0; j < gridSize - 1; j++) {
        if (tempArr[i][j] !== 0 && tempArr[i][j + 1] !== 0) {
          if (tempArr[i][j].colorCode === tempArr[i][j + 1].colorCode) {
            if (tempArr[i][j].colorCode !== 6) {
              pairAvailable = true;
            }
          }
        }
      }
    }

    if (!blankCellAvailable && !pairAvailable) {
      gameOverSound.play();
      console.log("Game Over");
    }

    setTiles(tempArr);
    setTileIds(tempIds);
    setScore(tempScore);
    setLevel(tempLevel);
  }

  // Add Cell and Tile Components

  const cellComponents = [];
  const tileComponents = [];
  const tileColors = ["red", "orange", "yellow", "green", "blue", "purple", "basket"]


  for (let i = 0; i < gridSize * gridSize; i++) {
    cellComponents.push(<Cell key={i} />);
  }

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (tiles[i][j] !== 0) {
        tileComponents.push(<Tile key={tiles[i][j].id} x={i} y={j} color={`${tileColors[tiles[i][j].colorCode]}-${tiles[i][j].typeCode}`} />);
      }
    }
  }

  // Return

  return (
    <div className="App">
      <Header />
      <Menu score={score} level={level} />
      <GameContainer gridSize={gridSize} cellComponents={cellComponents} tileComponents={tileComponents} handleTiles={handleTiles} />
    </div >
  )

}

export default App;
