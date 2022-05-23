import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
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

const MenuButton = () => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate('/menu'); }}>
			<FaBars />
		</Button>
	)
}

export default MenuButton