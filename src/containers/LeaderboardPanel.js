import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import { FaAward } from 'react-icons/fa'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import SecondaryButton from '../components/panel/SecondaryButton'
import LeaderboardEntry from '../components/panel/LeaderboardEntry'

const Panel = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;
	overflow: hidden;

	@media screen and (orientation: landscape) {
		width: 70vmin;
		height: 80vmin;
	}

	@media screen and (orientation: portrait) {
		width: 80vw;
		height: 70vh;
	}

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


const LeaderboardPanel = () => {

	const { userData } = useContext(UserDataContext);
	const navigate = useNavigate();

	let image = require("../images/guest-photo.png");

	return (
		<Panel id="about-panel" bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={'Leaderboard'} />
			<PanelBody>
				<Content>
					<LeaderboardHeader>
						<h3><FaAward style={{ marginTop: "0.75vmin" }} /></h3>
						<h3>Rank</h3>
						<h3>Player</h3>
						<h3>Score</h3>
					</LeaderboardHeader>
					<Leaderboard>
						<LeaderboardEntry image={image} username={"JimLahey"} score={14328} />
					</Leaderboard>
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Back to Menu'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</Panel>
	)
}

export default LeaderboardPanel