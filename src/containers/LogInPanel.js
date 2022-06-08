import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import styled from 'styled-components'

import PanelFooter from '../components/panel/PanelFooter'
import SecondaryButton from '../components/panel/SecondaryButton'
import PlayAsGuestModal from '../components/modals/PlayAsGuestModal'
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

const PanelBody = styled.div`
	display: grid;
    height: 86%;
	width: 100%;
`;

const Content = styled.div`
	justify-self: center;
    display: grid;
    justify-items: center;
    align-items: center;
	width: 90%;
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Image = styled.img`
    display: inline-block;
    height: 8vmin;
    width: 8vmin;
    content: url(${props => props.imageUrl});
`;

const WelcomePanel = () => {

	const [playAsGuestModalOpen, setPlayAsGuestModalOpen] = useState(false);
	const { userData, loggedIn, guestModeConfirmed } = useContext(UserDataContext);
	const navigate = useNavigate();

	const strawberry = require('../images/red-1.png');

	return (
		<Panel id="log-in-panel" bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelBody>
				<Content>
					<Section>
						<Title>
							<Image imageUrl={strawberry} />
							<h1>Fruit</h1>
							<Image imageUrl={strawberry} />
						</Title>
						<h1>Fusion</h1>
					</Section>
					<LogInForm />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton
					text={guestModeConfirmed || loggedIn ? "Back to Menu" : "Play as Guest"}
					handleClick={() => { guestModeConfirmed || loggedIn ? navigate('/menu') : setPlayAsGuestModalOpen(true) }} />
			</PanelFooter>
			<PlayAsGuestModal modalOpen={playAsGuestModalOpen} closeModal={() => { setPlayAsGuestModalOpen(false); navigate('/') }} />
		</Panel>
	)
}

export default WelcomePanel