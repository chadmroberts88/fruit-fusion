import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../helper/Context'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import SecondaryButton from '../components/panel/SecondaryButton'
import RegistrationForm from '../components/forms/RegistrationForm'

const Panel = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;
	width: 90%;
	height: 90%;

	@media screen and (orientation: landscape) {
		width: 80vmin;
		height: 80vmin;
	}

`;

const Content = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
`;

const CreateAccountPanel = () => {

	const navigate = useNavigate();

	const { darkModeOn, loggedIn } = useContext(UserDataContext);

	return (
		<Panel id="create-account-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={loggedIn ? 'Update Account' : 'Create Account'} />
			<PanelBody>
				<Content>
					<RegistrationForm />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={"Back"} handleClick={() => { navigate(loggedIn ? '/account' : '/') }} />
			</PanelFooter>
		</Panel>
	)
}

export default CreateAccountPanel