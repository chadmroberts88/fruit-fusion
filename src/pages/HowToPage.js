import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrame from '../components/panel/PanelFrame'
import PanelHeader from '../components/panel/PanelHeader'
import GameInstructions from '../components/panel/GameInstructions'
import CloseButton from '../components/buttons/CloseButton'

const AltPanelBody = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	row-gap: 20px;
`;

const Content = styled.div`
	background-color: #F0FFF2;
	padding: 10px;
	border: 1px solid black;
	border-radius: 10px;
	overflow: hidden auto;
`;

const HowToPage = () => {

	const navigate = useNavigate();

	return (
		<PanelContainer>
			<PanelFrame id="how-to-page">
				<AltPanelBody>
					<PanelHeader text={'How to Play'}>
						<CloseButton path={'/game'} />
					</PanelHeader>
					<Content>
						<GameInstructions />
					</Content>
				</AltPanelBody>
			</PanelFrame>
		</PanelContainer>
	)
}

export default HowToPage