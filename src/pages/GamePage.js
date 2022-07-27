import { React, useContext } from 'react'
import { UserDataContext } from '../context/UserDataContext'
import styled from 'styled-components'

import GameDashboard from '../components/game/GameDashboard'
import GameContainer from '../components/game/GameContainer'
import GameMenu from '../components/game/GameMenu'

const Page = styled.div`
	background-color: ${props => props.bgColor};
	width: 100%;
	height: 100%;
	display: grid;

	@media screen and (orientation: landscape){
		grid-template-columns: 1fr 8fr 0.5fr;
		grid-template-rows: 1fr;
	}

	@media screen and (orientation: portrait) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 8fr 0.5fr;
	}

`;

const GamePage = () => {

	const { userData } = useContext(UserDataContext);

	return (
		<Page id="game-page" bgColor={userData.darkModeOn ? '#000000' : '#E8FCCF'}>
			<GameDashboard />
			<GameContainer />
			<GameMenu />
		</Page>
	)
}

export default GamePage