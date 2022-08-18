import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import UserButton from '../buttons/UserButton'
import HowToButton from '../buttons/HowToButton'
import LeaderboardButton from '../buttons/LeaderboardButton'
import ResetButton from '../buttons/ResetButton'

const Menu = styled.div`
	background-color: ${props => props.color};
	width: 100%;
	height: 100%;
	display: grid;
	justify-items: center;
	align-items: center;
	column-gap: 1vmin;
	row-gap: 1vmin;
	padding: 1vmin;

	@media screen and (orientation: landscape) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
	}

	@media screen and (orientation: portrait) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	}

`;

const GameMenu = () => {

	const { userData } = useContext(UserDataContext);

	return (
		<Menu id="game-menu" color={userData.darkModeOn ? '#282828' : '#96E072'}>
			<UserButton path={'/menu'} />
			<HowToButton path={'/how-to-play'} />
			<LeaderboardButton path={'/leaderboard'} />
			<ResetButton />
		</Menu>
	)
}

export default GameMenu