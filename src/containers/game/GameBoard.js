import { React, memo } from 'react'
import styled from 'styled-components'
import CellsContainer from './CellsContainer'
import TilesContainer from './TilesContainer'

const Board = styled.div`
    position: relative;
`;

const GameBoard = () => {

	return (
		<Board id="game-board">
			<CellsContainer />
			<TilesContainer />
		</Board>
	)
}

export default memo(GameBoard)