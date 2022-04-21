import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import GameWrapper from './components/GameWrapper';
import Menu from './components/Menu';

function App() {

  const gridSize = 5;
  const moveTilesSound = new Audio('/moveTiles.wav');
  const addPointSound = new Audio('/addPoint.wav');
  const newLevelSound = new Audio('/newLevel.wav');
  // const errorSound = new Audio('/error.wav');
  const gameOverSound = new Audio('/gameOver.wav');

  // Hooks

  const [tileIds, setTileIds] = useState(0);
  const [tiles, setTiles] = useState(setInitalTiles());
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  const [newGame, setNewGame] = useState(true);
  const [newTileCounter, setNewTileCounter] = useState(0);
  useEffect(() => { addTiles(2); }, []);

  // Set Board Layout

  function addTiles(qty) {

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

  function setInitalTiles() {
    let tempArr = [];
    for (let i = 0; i < gridSize; i++) {
      tempArr[i] = [];
      for (let j = 0; j < gridSize; j++) {
        tempArr[i][j] = 0
      }
    }
    return tempArr;
  }

  function removeTile(tileId) {
    let tempArr = [];

    for (let i = 0; i < gridSize; i++) {
      tempArr[i] = [];

      for (let j = 0; j < gridSize; j++) {
        tempArr[i][j] = tiles[i][j];

        if (tempArr[i][j].id === tileId) {
          tempArr[i][j] = 0;
        }
      }
    }

    setTiles(tempArr);
  }

  function handleTiles(buttonId) {
    const direction = buttonId.split("-", 1);
    const reg = /\d+/g;
    const result = buttonId.match(reg);
    const n = parseInt(result[0]);

    let tempArr = [];
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

    if (direction[0] === "left") {

      for (let i = 0; i < gridSize; i++) {
        for (let j = i + 1; j < gridSize; j++) {
          if (tempArr[i][n] === 0) {
            if (tempArr[j][n] !== 0) {
              tempArr[i][n] = tempArr[j][n];
              tempArr[j][n] = 0;
              tileMoved = true;
            }
          }
        }
      }

      for (let i = 0; i < gridSize - 1; i++) {
        if (tempArr[i][n] !== 0) {
          if (tempArr[i][n].colorCode === tempArr[i + 1][n].colorCode) {

            if (tempArr[i][n].colorCode === 5) {
              tempLevel++;
              newLevelSound.play();
            }

            if (tempArr[i][n].colorCode < 6) {
              tempScore = tempScore + (tempArr[i][n].colorCode * 10 * tempLevel);
              tempArr[i][n].colorCode += 1;
              tempArr[i + 1][n] = 0;
              tileMoved = true;
              addPointSound.play();
            }

          }
        }
      }

      for (let i = 0; i < gridSize; i++) {
        for (let j = i + 1; j < gridSize; j++) {
          if (tempArr[i][n] === 0) {
            if (tempArr[j][n] !== 0) {
              tempArr[i][n] = tempArr[j][n];
              tempArr[j][n] = 0;
              tileMoved = true;
            }
          }
        }
      }
    }

    if (direction[0] === "right") {

      for (let i = gridSize - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
          if (tempArr[i][n] === 0) {
            if (tempArr[j][n] !== 0) {
              tempArr[i][n] = tempArr[j][n];
              tempArr[j][n] = 0;
              tileMoved = true;
            }
          }
        }
      }

      for (let i = gridSize - 1; i > 0; i--) {
        if (tempArr[i][n] !== 0) {
          if (tempArr[i][n].colorCode === tempArr[i - 1][n].colorCode) {

            if (tempArr[i][n].colorCode === 5) {
              tempLevel++;
              newLevelSound.play();
            }

            if (tempArr[i][n].colorCode < 6) {
              tempScore = tempScore + (tempArr[i][n].colorCode * 10 * tempLevel);
              tempArr[i][n].colorCode += 1;
              tempArr[i - 1][n] = 0;
              tileMoved = true;
              addPointSound.play();
            }

          }
        }
      }

      for (let i = gridSize - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
          if (tempArr[i][n] === 0) {
            if (tempArr[j][n] !== 0) {
              tempArr[i][n] = tempArr[j][n];
              tempArr[j][n] = 0;
              tileMoved = true;
            }
          }
        }
      }
    }

    if (direction[0] === "up") {

      for (let i = 0; i < gridSize; i++) {
        for (let j = i + 1; j < gridSize; j++) {
          if (tempArr[n][i] === 0) {
            if (tempArr[n][j] !== 0) {
              tempArr[n][i] = tempArr[n][j];
              tempArr[n][j] = 0;
              tileMoved = true;
            }
          }
        }
      }

      for (let i = 0; i < gridSize - 1; i++) {
        if (tempArr[n][i] !== 0) {
          if (tempArr[n][i].colorCode === tempArr[n][i + 1].colorCode) {

            if (tempArr[n][i].colorCode === 5) {
              tempLevel++;
              newLevelSound.play();
            }

            if (tempArr[n][i].colorCode < 6) {
              tempScore = tempScore + (tempArr[n][i].colorCode * 10 * tempLevel);
              tempArr[n][i].colorCode += 1;
              tempArr[n][i + 1] = 0;
              tileMoved = true;
              addPointSound.play();
            }

          }
        }
      }

      for (let i = 0; i < gridSize; i++) {
        for (let j = i + 1; j < gridSize; j++) {
          if (tempArr[n][i] === 0) {
            if (tempArr[n][j] !== 0) {
              tempArr[n][i] = tempArr[n][j];
              tempArr[n][j] = 0;
              tileMoved = true;
            }
          }
        }
      }
    }

    if (direction[0] === "down") {

      for (let i = gridSize - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
          if (tempArr[n][i] === 0) {
            if (tempArr[n][j] !== 0) {
              tempArr[n][i] = tempArr[n][j];
              tempArr[n][j] = 0;
              tileMoved = true;
            }
          }
        }
      }

      for (let i = gridSize - 1; i > 0; i--) {
        if (tempArr[n][i] !== 0) {
          if (tempArr[n][i].colorCode === tempArr[n][i - 1].colorCode) {

            if (tempArr[n][i].colorCode === 5) {
              tempLevel++;
              newLevelSound.play();
            }

            if (tempArr[n][i].colorCode < 6) {
              tempScore = tempScore + (tempArr[n][i].colorCode * 10 * tempLevel);
              tempArr[n][i].colorCode += 1;
              tempArr[n][i - 1] = 0;
              tileMoved = true;
              addPointSound.play();
            }

          }
        }
      }

      for (let i = gridSize - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
          if (tempArr[n][i] === 0) {
            if (tempArr[n][j] !== 0) {
              tempArr[n][i] = tempArr[n][j];
              tempArr[n][j] = 0;
              tileMoved = true;
            }
          }
        }
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


  // Return

  return (
    <div className="App">
      <Header />
      <Menu score={score} level={level} />
      <GameWrapper gridSize={gridSize} tiles={tiles} handleTiles={handleTiles} />
    </div >
  )

}

export default App;
