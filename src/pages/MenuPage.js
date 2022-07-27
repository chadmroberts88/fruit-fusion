import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import styled from 'styled-components'

import PanelContainer from '../components/panel/PanelContainer'

import PanelFrame from '../components/panel/PanelFrame'
import PanelHeader from '../components/panel/PanelHeader'
import PanelBody from '../components/panel/PanelBody'
import PanelFooter from '../components/panel/PanelFooter'
import PrimaryButton from '../components/panel/PrimaryButton'
import SecondaryButton from '../components/panel/SecondaryButton'
import OptionsSection from '../components/panel/OptionsSection'
import Option from '../components/panel/Option'
import ResetGameModal from '../modals/ResetGameModal'

import CloseButton from '../components/buttons/CloseButton'

const UserSection = styled.div`
	display: grid;
	row-gap: 1vmin;
	justify-items: center;
`;

const MenuPage = () => {

	const { userData, loggedIn } = useContext(UserDataContext);
	const [resetGameModelOpen, setResetGameModalOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<PanelContainer>
			<PanelFrame id="menu-panel" >
				<PanelBody>
					<PanelHeader text={'Menu'}>
						<CloseButton path={'/game'} />
					</PanelHeader>
					<PrimaryButton text={'How to Play'} handleClick={() => { navigate('/how-to-play') }} />
					<PrimaryButton text={'Settings'} handleClick={() => { navigate('/settings') }} />
					<PrimaryButton text={'Leaderboard'} handleClick={() => { navigate('/leaderboard') }} />
					<PrimaryButton text={'Reset Game'} handleClick={() => { setResetGameModalOpen(true) }} />
					<SecondaryButton text={'Exit Menu'} handleClick={() => { navigate('/game') }} />
					<Option text={'Developed by Chad Roberts'} handleClick={() => { navigate('/game') }} />
				</PanelBody>
				<ResetGameModal modalOpen={resetGameModelOpen} closeModal={() => { setResetGameModalOpen(false) }} />
			</PanelFrame>
		</PanelContainer>
	)
}

export default MenuPage