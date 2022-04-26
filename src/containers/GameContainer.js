import React from 'react';
import Spacer from '../components/Spacer';
import UpButtonContainer from './UpButtonContainer';
import LeftButtonContainer from './LeftButtonContainer';
import RightButtonContainer from './RightButtonContainer';
import DownButtonContainer from './DownButtonContainer';
import Board from '../components/Board';

const GameContainer = ({ gridSize, cellComponents, tileComponents, handleTiles }) => {

    return (
        <div id="game-container">
            <Spacer />
            <UpButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Spacer />
            <LeftButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Board gridSize={gridSize} cellComponents={cellComponents} tileComponents={tileComponents} />
            <RightButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Spacer />
            <DownButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Spacer />
        </div>
    )
}

export default GameContainer
