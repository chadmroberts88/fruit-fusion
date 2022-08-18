import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrameSmall from '../components/panel/PanelFrameSmall'
import PanelHeader from '../components/panel/PanelHeader'
import CloseButton from '../components/buttons/CloseButton'
import FormContainer from '../components/form/FormContainer'
import RegistrationForm from '../forms/RegistrationForm'

const RegistrationPage = () => {

	const { loggedIn } = useContext(UserDataContext);
	const navigate = useNavigate();

	return (
		<PanelContainer>
			<PanelFrameSmall id='registration-page'>
				<FormContainer>
					<PanelHeader text='Register'>
						<CloseButton path={'/'} />
					</PanelHeader>
					<RegistrationForm />
				</FormContainer>
			</PanelFrameSmall>
		</PanelContainer>

	)
}

export default RegistrationPage