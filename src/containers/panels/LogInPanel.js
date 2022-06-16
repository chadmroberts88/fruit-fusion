import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import PanelFrame from '../../components/panel/PanelFrame'
import PanelFooter from '../../components/panel/PanelFooter'
import SecondaryButton from '../../components/panel/SecondaryButton'
import LogInForm from '../../components/forms/LogInForm'
import PlayAsGuestModal from '../modals/PlayAsGuestModal'

const Body = styled.div`
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

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
    display: inline-block;
    height: 8vmin;
    width: 8vmin;
    content: url(${props => props.imageUrl});
`;

const LogInPanel = () => {

	const { userData } = useContext(UserDataContext);
	const [playAsGuestModalOpen, setPlayAsGuestModalOpen] = useState(false);
	const navigate = useNavigate();

	const handleClose = () => {
		setPlayAsGuestModalOpen(false);
		navigate('');
	}

	const handleFooterClick = () => {
		if (userData.username === 'Guest') {
			if (userData.guestModeConfirmed) {
				navigate('/menu');
			} else {
				setPlayAsGuestModalOpen(true);
			}
		} else {
			navigate('/menu');
		}
	}

	const displayButtonText = () => {
		if (userData.username === 'Guest') {
			if (userData.guestModeConfirmed) {
				return 'Back to Menu'
			} else {
				return 'Play as Guest'
			}
		} else {
			return 'Back to Menu'
		}
	}

	const strawberry = require('../../images/red-1.png');

	return (
		<PanelFrame id="log-in-panel">
			<Body>
				<Content>
					<Section>
						<Row>
							<Image imageUrl={strawberry} />
							<h1>Fruit</h1>
							<Image imageUrl={strawberry} />
						</Row>
						<Row>
							<h1>Fusion</h1>
						</Row>
					</Section>
					<LogInForm />
				</Content>
			</Body>
			<PanelFooter>
				<SecondaryButton
					text={displayButtonText()}
					handleClick={handleFooterClick}
				/>
			</PanelFooter>
			<PlayAsGuestModal
				modalOpen={playAsGuestModalOpen}
				handleClose={handleClose}
			/>
		</PanelFrame>
	)
}

export default LogInPanel