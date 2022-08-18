import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import styled from 'styled-components'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrame from '../components/panel/PanelFrame'
import PanelHeader from '../components/panel/PanelHeader'
import PanelBodyFlex from '../components/panel/PanelBodyFlex'
import ContentSection from '../components/panel/ContentSection'
import CloseButton from '../components/buttons/CloseButton'
import LeaderboardEntry from '../components/panel/LeaderboardEntry'

const UserIcon = styled(FaUserAlt)`
	margin: 0.75vmin 0 0 0;
`;

const LeaderboardHeader = styled.div`
    display: grid;
    grid-template-columns: 18% 16% 32% 22%;
    column-gap: 4%;
    align-items: center;
		justify-items: center;
    padding: 0 10px;
`;

const Leaderboard = styled.div`
		display: flex;
		flex-direction: column;
		row-gap: 10px;
    height: 100%;
    overflow: hidden auto;
`;

const LeaderboardPage = () => {

	let image = require("../images/guest-photo.png");

	let userObjects = [];
	let usersList = JSON.parse(localStorage.getItem("UsersList"));
	Object.entries(usersList).forEach(entry => {
		const [key, value] = entry;
		if (key !== 'Guest') {
			userObjects.push(value);
		}
	});

	let sortedObjects = userObjects.sort((a, b) => b.best - a.best);

	let leaderboardEntries = [];
	for (let i = 0; i < sortedObjects.length; i++) {
		leaderboardEntries.push(
			<LeaderboardEntry key={i} image={image} rank={i + 1} username={sortedObjects[i].username} score={sortedObjects[i].best} />
		)
	}

	return (
		<PanelContainer>
			<PanelFrame id="leaderboard-panel" >
				<PanelBodyFlex>
					<PanelHeader text={'Leaderboard'}>
						<CloseButton path={'/game'} />
					</PanelHeader>

					<LeaderboardHeader>
						<h3><UserIcon /></h3>
						<h3>Rank</h3>
						<h3>Player</h3>
						<h3>Score</h3>
					</LeaderboardHeader>

					<ContentSection>
						<Leaderboard>
							{leaderboardEntries}
						</Leaderboard>
					</ContentSection>
				</PanelBodyFlex>
			</PanelFrame>
		</PanelContainer>
	)
}

export default LeaderboardPage