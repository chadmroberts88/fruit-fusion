import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

const Button = styled(AiOutlineClose)`
  cursor: pointer;
  color: black;
  font-size: 1.7rem;

  :hover {
    color: #e86a4e;
  }
`;

const CloseButton = ({ path }) => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate(path) }} />
	)
}

export default CloseButton