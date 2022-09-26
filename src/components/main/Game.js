import React from 'react';
import styled from 'styled-components';

import BoardSpacer from '../game/BoardSpacer'
import GameBoard from '../game/GameBoard';
import HorzButtonContainer from '../game/HorzButtonContainer';
import VertButtonContainer from '../game/VertButtonContainer';

const Container = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;

	@media screen and (orientation: landscape) {
		height: 96vh;
	}

	@media screen and (orientation: portrait) {
		margin-top: 20px;
	}
`;

const Grid = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    overflow: hidden;
`;

const GameContainer = () => {

	return (
		<Container>
			<Grid>
				<BoardSpacer />
				<HorzButtonContainer buttonDir={'up'} />
				<BoardSpacer />
				<VertButtonContainer buttonDir={'left'} />
				<GameBoard />
				<VertButtonContainer buttonDir={'right'} />
				<BoardSpacer />
				<HorzButtonContainer buttonDir={'down'} />
				<BoardSpacer />
			</Grid>
		</Container>
	)
}

export default GameContainer
