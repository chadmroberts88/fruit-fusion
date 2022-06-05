import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../helper/Context'
import styled from 'styled-components'

import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import ToggleSection from '../components/panel/ToggleSection'
import SecondaryButton from '../components/panel/SecondaryButton'
import ToggleSwitch from '../components/panel/ToggleSwitch'


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
    display: grid;
    justify-items: center;
    align-items: center;
	width: 90%;
	border: 1px solid #a2a2a2;
	border-radius: 10px;
    padding: 2vmin;
`;

const SettingsPanel = () => {

	const { darkModeOn, setDarkModeOn, soundOn, setSoundOn, useSwipeOn, setUseSwipeOn } = useContext(UserDataContext);

	const navigate = useNavigate();

	return (
		<Panel id="how-to-play-panel" bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			<PanelHeader text={'Settings'} />
			<PanelBody>
				<Content>
					<h3>{'Sound Effects'}</h3>
					<ToggleSection toggleId={'sound-effects-toggle'} isChecked={soundOn} handleToggle={setSoundOn} />
					<h3>{'Dark Mode'}</h3>
					<ToggleSection toggleId={'dark-mode-toggle'} isChecked={darkModeOn} handleToggle={setDarkModeOn} />
					<h3>{'Use Swipe (Hide Buttons)'}</h3>
					<ToggleSection toggleId={'use-swipe-toggele'} isChecked={useSwipeOn} handleToggle={setUseSwipeOn} />
				</Content>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Back'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</Panel>
	)
}

export default SettingsPanel