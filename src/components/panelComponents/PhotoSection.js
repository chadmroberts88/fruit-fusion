import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Photo = styled.img`
    border: 2px solid #d35b40;
    border-radius: 50%;
    width: 12vmin;
    height: 12vmin;
`;

const PhotoSection = () => {

    const imageUrl = require('../../images/account-photo.jpeg');

    return (
        <Section>
            <Photo src={imageUrl}></Photo>
        </Section>
    )
}

export default PhotoSection