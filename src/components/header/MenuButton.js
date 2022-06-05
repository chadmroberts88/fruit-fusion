import { React, memo, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../helper/Context';
import styled from 'styled-components'

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

	const { darkModeOn, loggedIn } = useContext(UserDataContext);
	const navigate = useNavigate();

	const openModal = () => {
		alert("You are playing as a guest!")
		navigate('/menu');
	}

	return (
		<Button onClick={() => { loggedIn ? navigate('/menu') : openModal(); }}>
			Menu
		</Button>
	)
}

export default memo(MenuButton)