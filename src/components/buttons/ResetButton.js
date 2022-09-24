import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdRefresh } from 'react-icons/io'
import styled from 'styled-components'

const Button = styled(IoMdRefresh)`
	font-size: 2rem;
	color: #1a7431;
	margin: 4px;
	cursor: pointer;

	:hover {
		color: #299844;
	}
`;

const ResetButton = () => {

	return (
		<Button onClick={() => { }} />
	)
}

export default ResetButton