import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext, ThemeContext } from '../helper/Context'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import SecondaryButton from '../components/panel/SecondaryButton'
import LogInForm from '../components/forms/LogInForm'

const Panel = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;

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
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
`;

const LogInPanel = () => {

	const { gameInProgress, darkModeOn } = useContext(UserDataContext);
	const navigate = useNavigate();

	return (
		<Panel id="log-in-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={"Log In"} />
			<PanelBody>
				<Content>
					<LogInForm />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={"Back"} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</Panel>
	)
}

export default LogInPanel