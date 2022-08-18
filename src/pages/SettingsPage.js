import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrame from '../components/panel/PanelFrame'
import PanelHeader from '../components/panel/PanelHeader'
import CloseButton from '../components/buttons/CloseButton'



import PanelFooter from '../components/panel/PanelFooter'
import PanelBody from '../components/panel/PanelBody'
import ToggleSection from '../components/panel/ToggleSection'
import SecondaryButton from '../components/panel/SecondaryButton'
import PrimaryButton from '../components/panel/PrimaryButton'

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
		<PanelContainer id='settings-page'>
			<PanelFrame>
				<PanelBody>
					<PanelHeader text={'Settings'}>
						<CloseButton path={'/menu'} />
					</PanelHeader>

					<h3>{'Sound Effects:'}</h3>
					<ToggleSection toggleId={'sound-effects-toggle'} isChecked={userData.soundOn} handleToggle={() => { toggleSoundEffects() }} />
					<h3>{'Dark Mode:'}</h3>
					<ToggleSection toggleId={'dark-mode-toggle'} isChecked={userData.darkModeOn} handleToggle={() => { toggleDarkMode() }} />
					<h3>{'Use Swipe (Hide Buttons):'}</h3>
					<ToggleSection toggleId={'use-swipe-toggele'} isChecked={userData.useSwipeOn} handleToggle={() => { toggleUseSwipe() }} />
					<PrimaryButton text={'Save Changes'} handleClick={() => { console.log('Save Changes Pressed') }} />
				</PanelBody>
			</PanelFrame>
		</PanelContainer>
	)
}

export default SettingsPage