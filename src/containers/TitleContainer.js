import React from 'react'
import styled from 'styled-components'

const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    height: 100%;
    padding: 1vmin;
`;

const StyledImg = styled.img`
    display: inline-block;
    height: 10vmin;
    width: 10vmin;
    padding: 1vmin;
    content: url(${props => props.imageUrl});
`;

const TitleContainer = () => {

    const leftImageUrl = require('../images/yellow-0.png');
    const rightImageUrl = require('../images/red-2.png');

    return (
        <StyledTitleContainer id='title'>
            <StyledImg imageUrl={leftImageUrl} alt="bananas"></StyledImg>
            <h1>Fruit Fusion</h1>
            <StyledImg imageUrl={rightImageUrl} alt="cherries"></StyledImg>
        </StyledTitleContainer>
    )
}

export default TitleContainer