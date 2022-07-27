import { React, memo, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import { IoMdHelpCircle } from 'react-icons/io'
import styled from 'styled-components'
import PlayAsGuestModal from '../../modals/PlayAsGuestModal'

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MenuIcon = styled(IoMdHelpCircle)`
  cursor: pointer;
  color: black;
  font-size: 3rem;

  :hover {
    color: #e86a4e;
  }

`;

const MenuButton = () => {

	const { userData } = useContext(UserDataContext);
	const [playAsGuestModalOpen, setPlayAsGuestModalOpen] = useState(false);
	const navigate = useNavigate();

	const handleClose = () => {
		setPlayAsGuestModalOpen(false);
		navigate('/');
	}

	const handleMenuClick = () => {
		if (userData.username === 'Guest') {
			if (userData.guestModeConfirmed) {
				navigate('/menu');
			} else {
				setPlayAsGuestModalOpen(true);
			}
		} else {
			navigate('/menu');
		}
	}

	return (
		<>
			<IconContainer>
				<MenuIcon
					onClick={() => { navigate('/menu') }}
				/>
			</IconContainer>
			<PlayAsGuestModal
				modalOpen={playAsGuestModalOpen}
				handleClose={handleClose}
			/>
		</>
	)
}

export default memo(MenuButton)