import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import SecondaryButton from '../components/panel/SecondaryButton'
import RegistrationForm from '../components/forms/RegistrationForm'

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
	justify-self: center;
    display: grid;
    justify-items: center;
    align-items: center;
	width: 90%;
	border: 1px solid #a2a2a2;
	border-radius: 10px;
    padding: 2vmin;
`;

const CreateAccountPanel = () => {

	const navigate = useNavigate();

	const { userData, loggedIn } = useContext(UserDataContext);

	return (
		<Panel id={loggedIn ? "update-account-panel" : "create-account-panel"} bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={loggedIn ? 'Update Account' : 'Create Account'} />
			<PanelBody>
				<Content>
					<RegistrationForm />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={loggedIn ? 'Back to Account' : 'Back to Log In'} handleClick={() => { navigate(loggedIn ? '/account' : '/') }} />
			</PanelFooter>
		</Panel>
	)
}

export default CreateAccountPanel