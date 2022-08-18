import React from 'react'

import PanelContainer from '../components/panel/PanelContainer'
import PanelFrame from '../components/panel/PanelFrame'
import PanelBody from '../components/panel/PanelBody'
import PanelHeader from '../components/panel/PanelHeader'
import CloseButton from '../components/buttons/CloseButton'

const AccountPage = () => {
	return (
		<PanelContainer id='account-page'>
			<PanelFrame>
				<PanelBody>
					<PanelHeader text={'Update Account'}>
						<CloseButton path={'/menu'} />
					</PanelHeader>
				</PanelBody>
			</PanelFrame>
		</PanelContainer>
	)
}

export default AccountPage