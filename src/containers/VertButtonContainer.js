import { React, memo, useContext } from 'react'
import { UserDataContext, GamePlayContext } from '../helper/Context'
import styled from 'styled-components'
import GameButton from '../components/game/GameButton'

const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.gridSize}, ${props => props.cellSize});
    grid-template-columns: 6vmin;
	row-gap: ${props => props.gapSize};
	margin: 2vmin 0;
`;

const VertButtonContainer = ({ buttonDir }) => {

	const { useSwipeOn } = useContext(UserDataContext);
	const { gridSize, cellSize, gapSize } = useContext(GamePlayContext);

	const buttons = [];

	for (let i = 0; i < gridSize; i++) {
		buttons.push(<GameButton key={`${buttonDir}-${i}`} id={`${buttonDir}-${i}`} buttonDir={buttonDir} />)
	};

	if (useSwipeOn) {
		return (
			<div>
			</div>
		)
	} else {

		return (
			<Container className="vert-button-container" gridSize={gridSize} cellSize={cellSize} gapSize={gapSize}>
				{buttons}
			</Container>
		)
	}
}

export default memo(VertButtonContainer)