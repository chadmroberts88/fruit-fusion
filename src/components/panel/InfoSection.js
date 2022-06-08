import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserDataContext } from '../../context/UserDataContext';

const Section = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 3vmin;
    align-items: center;
    width: 70%;
`;

const Data = styled.div`
	white-space: nowrap;
	color: ${props => props.color};
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
`;

const InfoSection = ({ info }) => {

	const { darkModeOn } = useContext(UserDataContext);

	let elements = [];

	for (let i = 0; i < info.length; i++) {
		elements.push(
			<h3 key={`label-${i}`}>{info[i].label}</h3>
		);

		elements.push(
			<Data key={`data-${i}`} color={darkModeOn ? 'white' : 'black'}>
				<span style={{ margin: 0, fontSize: '2.5vmin' }}>{info[i].data}</span>
			</Data>
		);
	}

	return (
		<Section>
			{elements}
		</Section>
	)
}

export default InfoSection