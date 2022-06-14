import { React } from 'react'
import { useNavigate } from 'react-router-dom'

import PanelFrame from '../../components/panel/PanelFrame'
import PanelHeader from '../../components/panel/PanelHeader'
import PanelFooter from '../../components/panel/PanelFooter'
import PanelBody from '../../components/panel/PanelBody'
import GameInstructions from '../../components/panel/GameInstructions'
import SecondaryButton from '../../components/panel/SecondaryButton'

const HowToPlayPanel = () => {

	const navigate = useNavigate();

	return (
		<PanelFrame id="how-to-play-panel">
			<PanelHeader text={'How to Play'} />
			<PanelBody>
				<GameInstructions />
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Back to Menu'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</PanelFrame>
	)
}

export default HowToPlayPanel