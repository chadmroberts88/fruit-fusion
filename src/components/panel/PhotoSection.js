import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    align-items: center;
`;

const Photo = styled.img`
    border: 2px solid #d35b40;
    border-radius: 50%;
    width: ${props => props.size};
    height: ${props => props.size};
		cursor: pointer;
`;

const PhotoSection = ({ size }) => {

	const navigate = useNavigate();
	const imageUrl = require('../../images/guest-photo.png');

	return (
		<Section>
			<Photo
				src={imageUrl}
				size={size}
				onClick={() => { navigate('/account') }}
			/>
		</Section>
	)
}

export default PhotoSection