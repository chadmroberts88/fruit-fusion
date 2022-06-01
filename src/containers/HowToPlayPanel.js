import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../helper/Context'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import GameInstructions from '../components/panel/GameInstructions'
import SecondaryButton from '../components/panel/SecondaryButton'


const Panel = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;
	width: 90%;
	height: 90%;
	overflow: hidden;

	@media screen and (orientation: landscape) {
		width: 80vmin;
		height: 80vmin;
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

	const { darkModeOn } = useContext(UserDataContext);

	const navigate = useNavigate();

	return (
		<Panel id="how-to-play-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={'How to Play'} />
			<PanelBody>
				<Content>
					<GameInstructions />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Back'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</Panel>
	)
}

export default HowToPlayPanel