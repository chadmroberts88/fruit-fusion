import React from 'react'
import TitleContainer from './TitleContainer'
import MenuButton from '../components/header/MenuButton'
import ProfileButton from '../components/header/ProfileButton'
import styled from 'styled-components'
import HeaderButtonContainer from './HeaderButtonContainer'

const StyledHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
