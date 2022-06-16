import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import PanelFrame from '../../components/panel/PanelFrame'
import PanelHeader from '../../components/panel/PanelHeader'
import PanelBody from '../../components/panel/PanelBody'
import PanelFooter from '../../components/panel/PanelFooter'
import PrimaryButton from '../../components/panel/PrimaryButton'
import SecondaryButton from '../../components/panel/SecondaryButton'
import OptionsSection from '../../components/panel/OptionsSection'
import Option from '../../components/panel/Option'
import ResetGameModal from '../modals/ResetGameModal'

const UserSection = styled.div`
	display: grid;
	row-gap: 1vmin;
	justify-items: center;
`;

const MenuPanel = () => {

	const { userData, loggedIn } = useContext(UserDataContext);
	const [resetGameModelOpen, setResetGameModalOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<PanelFrame id="menu-panel" >
			<PanelHeader text={"Menu"} />
			<PanelBody>
				<UserSection>
					<h3>Currently Playing As:</h3>
					<h4>{userData.username}</h4>
				</UserSection>
				<PrimaryButton text={'Go to Game'} handleClick={() => { navigate('/fruit-fusion/game') }} />
				<OptionsSection>
					<Option text={'Reset Game'} handleClick={() => { setResetGameModalOpen(true) }} />
					<Option text={'How to Play'} handleClick={() => { navigate('/fruit-fusion/how-to-play') }} />
					<Option text={'Settings'} handleClick={() => { navigate('/fruit-fusion/settings') }} />
					<Option text={'Leaderboard'} handleClick={() => { navigate('/fruit-fusion/leaderboard') }} />
					<Option text={'About Fruit Fusion'} handleClick={() => { navigate('/fruit-fusion/about') }} />
				</OptionsSection>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton text={loggedIn ? 'Go to Account' : 'Log In / Create Account'} handleClick={() => { navigate(loggedIn ? '/fruit-fusion/account' : '/fruit-fusion') }} />
			</PanelFooter>
			<ResetGameModal modalOpen={resetGameModelOpen} closeModal={() => { setResetGameModalOpen(false) }} />
		</PanelFrame>
	)
}

export default MenuPanel