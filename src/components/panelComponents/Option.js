import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Link = styled.div`
    color: #a2a2a2;
    font-family: 'Arimo', sans-serif;
    font-size: 3vmin;
    font-weight: bold;
    text-align: center;
    margin: 1vmin;
    grid-column: 1 / span 2;
    justify-self: center;
    cursor: pointer;

    :hover {
        color: lightgrey;
    }

`;

const Option = ({ text, handleClick }) => {

    return (
        <Link onClick={() => { }}>
            {text}
        </Link>
    )
}

export default Option