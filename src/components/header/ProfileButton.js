import React from 'react'
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const StyledProfileButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6vmin;
    color: #a2a2a2;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const ProfileButton = () => {

    const navigate = useNavigate();
    let path = '/';
    let loggedIn = true;

    if (loggedIn) {
        path = '/account';
    }

    return (
        <StyledProfileButton onClick={() => { navigate(path); }}>
            <FaUserCircle />
        </StyledProfileButton>
    )
}

export default ProfileButton