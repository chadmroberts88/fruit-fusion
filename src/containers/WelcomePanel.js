import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext, ThemeContext } from '../helper/Context'
import styled from 'styled-components'

import PanelFooter from '../components/panel/PanelFooter'
import SecondaryButton from '../components/panel/SecondaryButton'
import PrimaryButton from '../components/panel/PrimaryButton'

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
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100%;
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

	const { gameInProgress, darkModeOn } = useContext(UserDataContext);
	const navigate = useNavigate();

	const bananas = require('../images/yellow-0.png');
	const strawberry = require('../images/red-1.png');
	const lemon = require('../images/yellow-1.png');


	return (
		<Panel id="welcome-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelBody>
				<Content>
					<Section>
						<h3>Welcome To</h3>
						<Title>
							<Image imageUrl={strawberry} />
							<h1>Fruit</h1>
							<Image imageUrl={strawberry} />
						</Title>
						<h1>Fusion</h1>
					</Section>
					<Section>
						<PrimaryButton text={'Log In'} handleClick={() => { navigate('/log-in') }} />
						<PrimaryButton text={'Create Account'} handleClick={() => { navigate('/create-account') }} />
					</Section>
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={gameInProgress ? "Back" : "Play as Guest"} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</Panel>
	)
}

export default WelcomePanel