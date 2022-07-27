import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import styled from 'styled-components'

import PanelFrame from '../components/panel/PanelFrame'
import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import SecondaryButton from '../components/panel/SecondaryButton'
import LeaderboardEntry from '../components/panel/LeaderboardEntry'

const Body = styled.div`
	display: grid;
    height: 72%;
	width: 100%;
`;

const Content = styled.div`
	justify-self: center;
	width: 90%;
	min-height: 100%;
`;

const LeaderboardHeader = styled.div`
    display: grid;
    grid-template-columns: 18% 16% 32% 22%;
    column-gap: 4%;
    justify-items: center;
    align-items: center;
    height: 12%;
    padding: 0 2vmin;
`;

const Leaderboard = styled.div`
    height: 88%;
    overflow: hidden auto;
    border: 1px solid #a2a2a2;
    border-radius: 10px;
    padding: 2vmin;
`;

const LeaderboardPage = () => {

	let image = require("../images/guest-photo.png");
	const navigate = useNavigate();

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
		<PanelFrame id="leaderboard-panel" >
			<PanelHeader text={'Leaderboard'} />
			<Body>
				<Content>
					<LeaderboardHeader>
						<h3><FaUser style={{ marginTop: "0.75vmin" }} /></h3>
						<h3>Rank</h3>
						<h3>Player</h3>
						<h3>Score</h3>
					</LeaderboardHeader>
					<Leaderboard>
						{leaderboardEntries}
					</Leaderboard>
				</Content>
			</Body>
			<PanelFooter>
				<SecondaryButton text={'Back to Menu'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</PanelFrame>
	)
}

export default LeaderboardPage