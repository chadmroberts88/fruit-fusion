import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: yellowgreen;
    font-size: calc(30px + 5vmin);
    font-family: 'Titan One', cursive;
    margin: 20px 0px 20px 0px;
    text-shadow: 2px 2px 0 #000;
`;

const Header = () => {
    return (
        <StyledHeader>Fruit Fusion</StyledHeader>
    )
}

export default Header