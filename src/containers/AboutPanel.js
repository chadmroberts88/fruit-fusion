import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../helper/Context'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import SecondaryButton from '../components/panel/SecondaryButton'
import SocialLink from '../components/panel/SocialLink'

const Panel = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;
	overflow: hidden;

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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	border: 1px solid #a2a2a2;
	border-radius: 10px;
    padding: 2vmin;
	overflow: hidden auto;
	text-align: center;
`;

const TextSection = styled.div`
    display: flex;
    width: 60%;
    margin: 1vmin;
`;

const SocialSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 40%;
    margin: 1vmin;
`;

const AboutPanel = () => {

	const { darkModeOn } = useContext(UserDataContext);

	const navigate = useNavigate();

	return (
		<Panel id="how-to-play-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={'About'} />
			<PanelBody>
				<Content>
					<TextSection>
						<p>Fruit Fusion was developed by Chad Roberts.</p>
					</TextSection>
					<SocialSection>
						<SocialLink link={"https://www.linkedin.com/in/chadmroberts88"}>
							<FaLinkedin />
						</SocialLink>
						<SocialLink link={"https://github.com/chadmroberts88"}>
							<FaGithubSquare />
						</SocialLink>
					</SocialSection>
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Back'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</Panel>
	)
}

export default AboutPanel