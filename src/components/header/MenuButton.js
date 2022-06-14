import { React, memo, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'
import PlayAsGuestModal from '../../containers/modals/PlayAsGuestModal'

const Button = styled.button`
    cursor: pointer;
	width: 100%;
	height: 100%;
	background-color: #d35b40;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 2.75vmin;
    font-weight: bold;

    :hover {
        background-color: #e86a4e;
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
			<Button onClick={() => { handleMenuClick(); }}>
				Menu
			</Button>
			<PlayAsGuestModal
				modalOpen={playAsGuestModalOpen}
				handleClose={handleClose}
			/>
		</>
	)
}

export default memo(MenuButton)