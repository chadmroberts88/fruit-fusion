import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8vmin;
    color: #d35b40;
    background-color: transparent;
    border: none;
    cursor: pointer;

    :hover {
        color: #e86a4e;
    }

`;

const SocialLink = ({ link, children }) => {

    return (
        <Link href={link}>
            {children}
        </Link>
    )
}

export default SocialLink