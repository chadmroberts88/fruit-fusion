import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaInfo } from 'react-icons/fa'
import styled from 'styled-components'

const Button = styled(FaInfo)`
  font-size: 1.7rem;
	color: #1A7431;
	margin: 4px;
	cursor: pointer;
`;

const HowToButton = ({ path }) => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate(path) }} />
	)
}

export default HowToButton