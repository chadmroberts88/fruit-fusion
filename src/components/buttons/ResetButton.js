import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdRefresh } from 'react-icons/io'
import styled from 'styled-components'

const Button = styled(IoMdRefresh)`
	font-size: 2rem;
	color: #1A7431;
	margin: 4px;
	cursor: pointer;
`;

const ResetButton = () => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { }} />
	)
}

export default ResetButton