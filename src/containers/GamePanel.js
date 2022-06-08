import { React, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import styled from 'styled-components'

import BoardSpacer from '../components/game/BoardSpacer'
import GameBoard from '../components/game/GameBoard'
import HorzButtonContainer from './HorzButtonContainer'
import VertButtonContainer from './VertButtonContainer'
import GameOverModal from '../components/modals/GameOverModal'

const Panel = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    overflow: hidden;
`;

const GamePanel = () => {

	const { gameOverModalOpen, closeGameOverModal } = useContext(GameContext);

	return (
		<Panel id="game-panel">
			<BoardSpacer />
			<HorzButtonContainer buttonDir={'up'} />
			<BoardSpacer />
			<VertButtonContainer buttonDir={'left'} />
			<GameBoard />
			<VertButtonContainer buttonDir={'right'} />
			<BoardSpacer />
			<HorzButtonContainer buttonDir={'down'} />
			<BoardSpacer />
			<GameOverModal modalOpen={gameOverModalOpen} closeModal={closeGameOverModal} />
		</Panel>
	)
}

export default GamePanel
