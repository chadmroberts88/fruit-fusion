import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'

import PanelFrame from '../components/panel/PanelFrame'
import PanelHeader from '../components/panel/PanelHeader'
import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import ToggleSection from '../components/panel/ToggleSection'
import SecondaryButton from '../components/panel/SecondaryButton'

const SettingsPage = () => {

	const { userData, updateUserData } = useContext(UserDataContext);
	const navigate = useNavigate();

	const toggleSoundEffects = () => {
		updateUserData({ soundOn: !userData.soundOn });
	}

	const toggleDarkMode = () => {
		updateUserData({ darkModeOn: !userData.darkModeOn });
	}

	const toggleUseSwipe = () => {
		updateUserData({ useSwipeOn: !userData.useSwipeOn });
	}

	return (
		<PanelFrame id="settings-panel" >
			<PanelHeader text={'Settings'} />
			<PanelBody>
				<h3>{'Sound Effects:'}</h3>
				<ToggleSection toggleId={'sound-effects-toggle'} isChecked={userData.soundOn} handleToggle={() => { toggleSoundEffects() }} />
				<h3>{'Dark Mode:'}</h3>
				<ToggleSection toggleId={'dark-mode-toggle'} isChecked={userData.darkModeOn} handleToggle={() => { toggleDarkMode() }} />
				<h3>{'Use Swipe (Hide Buttons):'}</h3>
				<ToggleSection toggleId={'use-swipe-toggele'} isChecked={userData.useSwipeOn} handleToggle={() => { toggleUseSwipe() }} />
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={'Back to Menu'} handleClick={() => { navigate('/menu') }} />
			</PanelFooter>
		</PanelFrame>
	)
}

export default SettingsPage