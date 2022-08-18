import React from 'react'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrame from '../components/panel/PanelFrame'
import PanelBody from '../components/panel/PanelBody'
import PanelHeader from '../components/panel/PanelHeader'
import CloseButton from '../components/buttons/CloseButton'

const ProfilePage = () => {
	return (
		<PanelContainer id='profile-page'>
			<PanelFrame>
				<PanelBody>
					<PanelHeader text={'Update Profile'}>
						<CloseButton path={'/menu'} />
					</PanelHeader>
				</PanelBody>
			</PanelFrame>
		</PanelContainer>
	)
}

export default ProfilePage