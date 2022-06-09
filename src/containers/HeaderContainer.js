import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserDataContext'
import { GameContext } from '../context/GameContext'
import styled from 'styled-components'

import UserSection from '../components/header/UserSection'
import MenuButton from '../components/header/MenuButton'
import StatSection from '../components/header/StatSection'

const Container = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	column-gap: 2%;
	row-gap: 2%;
	padding: 2%;

	@media screen and (orientation: landscape) {
		grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr;
		grid-template-columns: 1fr;
		border-radius: 2vmin 0 0 2vmin;
		height: 100%;
		width: 20%;
	}

	@media screen and (orientation: portrait) {
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		border-radius: 2vmin 2vmin 0 0;
		width: 100%;
	}
`;

const HeaderContainer = () => {

	const { userData } = useContext(UserDataContext);
	const { gameData } = useContext(GameContext);

	return (
		<Container id='header-container' bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			<UserSection />
			<StatSection heading={"Multi:"} stat={`X ${gameData.multiplier}`}></StatSection>
			<StatSection heading={"Score:"} stat={gameData.score}></StatSection>
			<StatSection heading={"Best:"} stat={userData.best}></StatSection>
			<MenuButton />
		</Container >
	)
}

export default HeaderContainer
