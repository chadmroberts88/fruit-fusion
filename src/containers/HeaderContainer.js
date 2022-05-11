import React from 'react'
import TitleContainer from './TitleContainer'
import MenuButton from '../components/MenuButton'
import ProfileButton from '../components/ProfileButton'
import styled from 'styled-components'
import HeaderButtonContainer from './HeaderButtonContainer'

const StyledHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 13% 74% 13%;
    height: 12vh;
    width: 100vw;
`;

const HeaderContainer = () => {
    return (
        <StyledHeaderContainer id='header-container'>
            <HeaderButtonContainer button={<MenuButton />} />
            <TitleContainer />
            <HeaderButtonContainer button={<ProfileButton />} />
        </StyledHeaderContainer >
    )
}

export default HeaderContainer
