import { React, memo, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'
import PlayAsGuestModal from '../modals/PlayAsGuestModal'

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

	const [playAsGuestModalOpen, setPlayAsGuestModalOpen] = useState(false);
	const { loggedIn, guestModeConfirmed } = useContext(UserDataContext);
	const navigate = useNavigate();

	return (
		<>
			<Button
				onClick={() => { guestModeConfirmed || loggedIn ? navigate('/menu') : setPlayAsGuestModalOpen(true) }}
			>
				Menu
			</Button>
			<PlayAsGuestModal modalOpen={playAsGuestModalOpen} closeModal={() => { setPlayAsGuestModalOpen(false); navigate('/'); }} />
		</>
	)
}

export default memo(MenuButton)