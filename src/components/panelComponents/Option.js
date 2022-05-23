import React from 'react'
import styled from 'styled-components'

const Link = styled.div`
    color: #a2a2a2;
    font-family: 'Arimo', sans-serif;
    font-size: 3vmin;
    font-weight: bold;
    text-align: center;
    margin: 1vmin;
    width: fit-content;
    height: fit-content;
    justify-self: center;
    cursor: pointer;

    :hover {
        color: lightgrey;
    }

`;

const Option = ({ text, handleClick }) => {

    return (
        <Link onClick={() => { handleClick(); }}>
            {text}
        </Link>
    )
}

export default Option