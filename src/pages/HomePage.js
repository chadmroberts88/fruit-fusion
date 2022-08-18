import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrameSmall from '../components/panel/PanelFrameSmall'
import FormContainer from '../components/form/FormContainer'
import LogInForm from '../forms/LogInForm'
import SecondaryButton from '../components/panel/SecondaryButton'

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 10px;
	border-top: 1px solid #a2a2a2;
	padding-top: 10px;
`;

const SubSection = styled.div`
	display: flex;
	column-gap: 10px;
	align-items: center;
`;

const HomePage = () => {

	const navigate = useNavigate();

	return (
		<PanelContainer id='home-page'>
			<PanelFrameSmall>
				<FormContainer>
					<h1>Fruit Fusion</h1>
					<LogInForm />
					<Section>
						<p>Don't have an account?</p>
						<SubSection>
							<SecondaryButton text={'Register'} handleClick={() => { navigate('/register') }} disabled={false} />
							<p>or</p>
							<SecondaryButton text={'Play as Guest'} handleClick={() => { }} disabled={false} />
						</SubSection>
					</Section>
				</FormContainer>
			</PanelFrameSmall>
		</PanelContainer>
	)
}

export default HomePage