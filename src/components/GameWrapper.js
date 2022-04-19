import React from 'react';
import Spacer from './Spacer';
import UpButtonContainer from './UpButtonContainer';
import LeftButtonContainer from './LeftButtonContainer';
import RightButtonContainer from './RightButtonContainer';
import DownButtonContainer from './DownButtonContainer';
import Board from './Board';

function GameWrapper({ gridSize, tiles, handleTiles }) {

    return (
        <div id="game-wrapper">
            <Spacer />
            <UpButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Spacer />
            <LeftButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Board gridSize={gridSize} tiles={tiles} />
            <RightButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Spacer />
            <DownButtonContainer gridSize={gridSize} handleTiles={handleTiles} />
            <Spacer />
        </div>
    )
}

export default GameWrapper