import React from 'react'
import PanelContainer from '../components/panel/PanelContainer'
import PanelFrameSmall from '../components/panel/PanelFrameSmall'
import PanelHeader from '../components/panel/PanelHeader'
import CloseButton from '../components/buttons/CloseButton'
import FormContainer from '../components/form/FormContainer'
import RegistrationForm from '../forms/RegistrationForm'

const RegistrationPage = () => {

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