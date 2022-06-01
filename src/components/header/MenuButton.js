import { React, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    cursor: pointer;
	width: 100%;
	height: 100%;
	background-color: #d35b40;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 2.5vmin;
    font-weight: bold;

    :hover {
        background-color: #e86a4e;
    }

`;

const MenuButton = () => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate('/menu'); }}>
			Menu
		</Button>
	)
}

export default memo(MenuButton)