import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import GameInstructions from '../components/panel/GameInstructions'
import SecondaryButton from '../components/panel/SecondaryButton'


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
	border: 1px solid #a2a2a2;
	border-radius: 10px;
    padding: 2vmin;
	overflow: hidden auto;
`;

const HowToPlayPanel = () => {

	const { userData } = useContext(UserDataContext);
	const navigate = useNavigate();

	return (
		<Panel id="how-to-play-panel" bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={'How to Play'} />
			<PanelBody>
				<Content>
					<GameInstructions />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Back to Menu'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</Panel>
	)
}

export default HowToPlayPanel