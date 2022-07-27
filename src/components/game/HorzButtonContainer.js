import { React, memo, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import { GameContext } from '../../context/GameContext'
import styled from 'styled-components'

import GameButton from '../../components/game/GameButton'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.gridSize}, ${props => props.cellSize});
    grid-template-rows: 6vmin;
	column-gap: ${props => props.gapSize};
	margin: 0 2vmin;
`;

const HorzButtonContainer = ({ buttonDir }) => {

	const { userData } = useContext(UserDataContext);
	const { gridSize, cellSize, gapSize } = useContext(GameContext);

	const buttons = [];

	for (let i = 0; i < gridSize; i++) {
		buttons.push(<GameButton key={`${buttonDir}-${i}`} id={`${buttonDir}-${i}`} buttonDir={buttonDir} />)
	};

	if (userData.useSwipeOn) {
		return (
			<div>
			</div>
		)
	} else {
		return (
			<Container className="horz-button-container" gridSize={gridSize} cellSize={cellSize} gapSize={gapSize}>
				{buttons}
			</Container>
		)
	}

}

export default memo(HorzButtonContainer)