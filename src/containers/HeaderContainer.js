import React, { useContext } from 'react'
import { UserDataContext } from '../helper/Context'
import styled from 'styled-components'

import TitleSection from '../components/header/TitleSection'
import MenuButton from '../components/header/MenuButton'
import StatSection from '../components/header/StatSection'

const Container = styled.div`
    display: grid;
	grid-template-columns: 18% 20% 20% 20% 14%;
	grid-template-rows: 100%;
	column-gap: 2%;
	row-gap: 2%;
	padding: 1%;

	@media screen and (orientation: landscape) {
		grid-template-columns: 100%;
		grid-template-rows: 13% 23% 23% 23% 10%;
		padding: 6%;
	}

`;

const HeaderContainer = () => {

	const { multiplier, score, best } = useContext(UserDataContext);

	return (
		<Container id='header-container'>
			<TitleSection />
			<StatSection heading={"Multi"} stat={`X ${multiplier}`}></StatSection>
			<StatSection heading={"Score"} stat={score}></StatSection>
			<StatSection heading={"Best"} stat={best}></StatSection>
			<MenuButton />
		</Container >
	)
}

export default HeaderContainer
