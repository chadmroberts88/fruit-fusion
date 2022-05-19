import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const StyledMenuButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6vmin;
    color: #a2a2a2;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const MenuButton = () => {

    const navigate = useNavigate();

    return (
        <StyledMenuButton onClick={() => { navigate('/menu'); }}>
            <FaBars />
        </StyledMenuButton>
    )
}

export default MenuButton