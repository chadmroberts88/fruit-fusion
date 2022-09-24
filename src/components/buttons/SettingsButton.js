import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSettingsSharp } from 'react-icons/io5'
import styled from 'styled-components'

const Button = styled(IoSettingsSharp)`
	font-size: 1.7rem;
	color: #1a7431;
	margin: 4px;
	cursor: pointer;

	:hover {
		color: #299844;
	}
`;

const SettingsButton = ({ path }) => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate(path) }} />
	)
}

export default SettingsButton;