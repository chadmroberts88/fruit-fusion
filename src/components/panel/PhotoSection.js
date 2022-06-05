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
    width: ${props => props.size};
    height: ${props => props.size};
`;

const PhotoSection = ({ size }) => {

	const imageUrl = require('../../images/guest-photo.png');

	return (
		<Section>
			<Photo src={imageUrl} size={size} />
		</Section>
	)
}

export default PhotoSection