import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    width: 50vmin;
    margin: 2vmin;
`;

const TextContainer = styled.div`
    color: white;
    font-size: 2.5vmin;
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 1vmin;
`;

const PhotoInput = styled.input`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vmin;
    color: #a2a2a2;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const UploadSection = ({ label }) => {

	return (
		<Section>
			<h3>{label}</h3>
			<PhotoInput type={"file"} accept={"image/*"} />
		</Section >
	)
}

export default UploadSection