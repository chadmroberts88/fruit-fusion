import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Link = styled.a`
    color: #a2a2a2;
    font-family: 'Arimo', sans-serif;
    font-size: 3vmin;
    font-weight: bold;
    text-align: center;
    margin: 1vmin;
    cursor: pointer;

    :hover {
        color: lightgrey;
    }

`;

const NavigationLink = ({ text, path }) => {

    const navigate = useNavigate();

    return (
        <Link onClick={() => { navigate(path); }}>
            {text}
        </Link>
    )
}

export default NavigationLink