import React, { memo, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import styled from 'styled-components';
import BoardCell from '../../components/game/BoardCell';
import { useTheme } from '@mui/system';

const Container = styled.div`
    background-color: ${props => props.bgColor};
		display: grid;
    grid-template-columns: repeat(${props => props.gridSize}, ${props => props.cellSize});
    grid-template-rows: repeat(${props => props.gridSize}, ${props => props.cellSize});
    gap: ${props => props.gapSize};
		border: 2vmin solid transparent;
    border-radius: 2vmin;
    position: relative;
    top: 0px;
    left: 0px;
`;

const CellsContainer = () => {

	const { gridSize, cellSize, gapSize } = useContext(GameContext);
	const theme = useTheme();
	const cellComponents = [];

	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			cellComponents.push(<BoardCell key={`${i}-${j}`} cellRow={i} cellCol={j} />);
		}
	}

	return (
		<Container id="cells-container" bgColor={theme.palette.primary.dark} gridSize={gridSize} cellSize={cellSize} gapSize={gapSize}>
			{cellComponents}
		</Container>
	)
}

export default memo(CellsContainer)