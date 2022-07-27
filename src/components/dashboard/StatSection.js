import { React, memo, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

const Section = styled.div`
	background-color: ${props => props.color};
	display: grid;
	column-gap: 1vmin;
	width: 100%;
	justify-items: center;
	align-items: center;
  padding: 1vmin;
	white-space: nowrap;
	border-radius: 10px;

	@media screen and (orientation: landscape) {
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr;

	}

	@media screen and (orientation: portrait) {
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr;

	}

`;

const StatSection = ({ heading, stat }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<Section className="stat-section" color={userData.darkModeOn ? '#282828' : '#96E072'}>
			<h5>{heading}</h5>
			<h3>{stat}</h3>
		</Section>
	)
}

export default memo(StatSection)