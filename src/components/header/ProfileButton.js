import React from 'react'
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6vmin;
    width: 10vmin;
    height: 10vmin;
    color: #a2a2a2;
    background-color: transparent;
    border: none;
    margin: 2vmin;
    cursor: pointer;

    :hover {
        color: lightgrey;
    }
`;

const ProfileButton = () => {

	const navigate = useNavigate();

	let path = '/';
	let loggedIn = false;

	if (loggedIn) {
		path = '/account';
	} else {
		path = '/';
	}

	return (
		<Button onClick={() => { navigate(path); }}>
			<FaUserCircle />
		</Button>
	)
}

export default ProfileButton