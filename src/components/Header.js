import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
        color: yellowgreen;
        font-size: calc(30px + 5vmin);
        font-family: 'Titan One', cursive;
        margin: "0px 0px 0px;
        text-shadow: 2px 2px 0 #000;
        text-align: center;
`;

const Header = () => {

    return (
        <div className='title'>
            <StyledHeader>Fruit Fusion</StyledHeader>
        </div>
    )
}

export default Header