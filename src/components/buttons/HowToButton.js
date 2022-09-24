import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaInfo } from 'react-icons/fa'
import styled from 'styled-components'

const Button = styled(FaInfo)`
  font-size: 1.7rem;
	color: #1a7431;
	margin: 4px;
	cursor: pointer;

	:hover {
		color: #299844;
	}
`;

const HowToButton = ({ path }) => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate(path) }} />
	)
}

export default HowToButton