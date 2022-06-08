import { React, memo } from 'react'
import styled from 'styled-components'
import CellsContainer from '../../containers/CellsContainer'
import TilesContainer from '../../containers/TilesContainer'

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