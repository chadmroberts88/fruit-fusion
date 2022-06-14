import { React } from 'react'
import styled from 'styled-components'

import BoardSpacer from '../../components/game/BoardSpacer'
import GameBoard from '../game/GameBoard'
import HorzButtonContainer from '../game/HorzButtonContainer'
import VertButtonContainer from '../game/VertButtonContainer'
import GameOverModal from '../modals/GameOverModal'

const PanelFrame = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    overflow: hidden;
`;

const GamePanel = () => {

	return (
		<PanelFrame id="game-panel">
			<BoardSpacer />
			<HorzButtonContainer buttonDir={'up'} />
			<BoardSpacer />
			<VertButtonContainer buttonDir={'left'} />
			<GameBoard />
			<VertButtonContainer buttonDir={'right'} />
			<BoardSpacer />
			<HorzButtonContainer buttonDir={'down'} />
			<BoardSpacer />
			<GameOverModal />
		</PanelFrame>
	)
}

export default GamePanel
