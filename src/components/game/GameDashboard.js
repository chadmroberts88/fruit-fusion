import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import { GameContext } from '../../context/GameContext'
import styled from 'styled-components'

import StatSection from '../dashboard/StatSection'

const Dashboard = styled.div`
	display: grid;
	gap: 6px;

	@media screen and (orientation: landscape) {
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-columns: 1fr;
	}

	@media screen and (orientation: portrait) {
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;

const GameDashboard = () => {

	const { userData } = useContext(UserDataContext);
	const { gameData } = useContext(GameContext);

	return (
		<Dashboard id='game-dashboard' bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			<StatSection heading={"Multiplier"} stat={`X ${gameData.multiplier}`}></StatSection>
			<StatSection heading={"Score"} stat={gameData.score}></StatSection>
			<StatSection heading={"Best"} stat={userData.best}></StatSection>
			<StatSection heading={"Rank"} stat={userData.rank}></StatSection>
		</Dashboard >
	)
}

export default GameDashboard
