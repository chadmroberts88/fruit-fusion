import React from 'react'
import styled from 'styled-components'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrame from '../components/panel/PanelFrame'
import PanelBodyFlex from '../components/panel/PanelBodyFlex'
import PanelHeader from '../components/panel/PanelHeader'
import ContentSection from '../components/panel/ContentSection'
import GameInstructions from '../components/panel/GameInstructions'
import CloseButton from '../components/buttons/CloseButton'

const HowToPage = () => {

	return (
		<PanelContainer id="how-to-page">
			<PanelFrame>
				<PanelBodyFlex>
					<PanelHeader text={'How to Play'}>
						<CloseButton path={'/game'} />
					</PanelHeader>
					<ContentSection>
						<GameInstructions />
					</ContentSection>
				</PanelBodyFlex>
			</PanelFrame>
		</PanelContainer>
	)
}

export default HowToPage