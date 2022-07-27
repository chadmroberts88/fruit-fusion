import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'

import PanelFrame from '../components/panel/PanelFrame'
import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import SecondaryButton from '../components/panel/SecondaryButton'
import RegistrationForm from '../components/forms/RegistrationForm'

const RegistrationPage = () => {

	const { loggedIn } = useContext(UserDataContext);
	const navigate = useNavigate();

	return (
		<PanelFrame id={loggedIn ? "update-account-panel" : "create-account-panel"}>
			<PanelHeader text={loggedIn ? 'Update Account' : 'Create Account'} />
			<PanelBody>
				<RegistrationForm />
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={loggedIn ? 'Back to Account' : 'Back to Log In'} handleClick={() => { navigate(loggedIn ? '/account' : '/') }} />
			</PanelFooter>
		</PanelFrame>
	)
}

export default RegistrationPage