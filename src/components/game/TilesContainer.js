import { React, memo, useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import styled from 'styled-components'

import BoardTile from '../../components/game/BoardTile'

const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(${props => props.gridSize} * ${props => props.cellSize} + (${props => props.gridSize} - 1) * ${props => props.gapSize});
    height: calc(${props => props.gridSize} * ${props => props.cellSize} + (${props => props.gridSize} - 1) * ${props => props.gapSize});
		pointer-events: none;
		margin: 2vmin;
`;

const TilesContainer = () => {

	const { gridSize, cellSize, gapSize, gameData } = useContext(GameContext);

	const tileColors = ["red", "orange", "yellow", "green", "blue", "purple", "basket"]
	const tileComponents = [];

	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			if (gameData.tiles[i][j] !== 0) {
				tileComponents.push(
					<BoardTile
						key={gameData.tiles[i][j].id}
						x={i}
						y={j}
						color={`${tileColors[gameData.tiles[i][j].colorCode]}-${gameData.tiles[i][j].typeCode}`}
					/>
				);
			}
		}
	}

	return (
		<Container id="tiles-container" gridSize={gridSize} cellSize={cellSize} gapSize={gapSize}>
			{tileComponents}
		</Container>
	)
}

export default memo(TilesContainer)