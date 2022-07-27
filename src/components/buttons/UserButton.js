import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import styled from 'styled-components'

const Button = styled(FaUserAlt)`
	font-size: 1.7rem;
	color: #1A7431;
	margin: 4px;
	cursor: pointer;
`;

const UserButton = ({ path }) => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate(path) }} />
	)
}

export default UserButton