import { React } from 'react'
import styled from 'styled-components'
import CellsContainer from '../../containers/CellsContainer'
import TilesContainer from '../../containers/TilesContainer'

const Board = styled.div`
    position: relative;
`;

const GameBoard = ({ tiles }) => {

	return (
		<Board id="board">
			<CellsContainer ></CellsContainer>
			<TilesContainer tiles={tiles}></TilesContainer>
		</Board>
	)
}

export default GameBoard