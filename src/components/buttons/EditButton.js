import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { RiEdit2Fill } from 'react-icons/ri'

const Button = styled(RiEdit2Fill)`
  cursor: pointer;
  color: black;
  font-size: 1.3rem;

  :hover {
    color: #e86a4e;
  }
`;

const EditButton = ({ path }) => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate(path) }} />
	)
}

export default EditButton