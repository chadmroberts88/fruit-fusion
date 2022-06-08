import { React, memo, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import PhotoSection from '../panel/PhotoSection'

const Section = styled.div`
	display: grid;
	row-gap: 0.5vmin;
`;

const Username = styled.div`
	white-space: nowrap;
	color: ${props => props.color};
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
`;

const UserSection = () => {

	const { userData } = useContext(UserDataContext);

	return (
		<Section id='user-section'>
			<PhotoSection size={'8vmin'} />
			<Username color={userData.darkModeOn ? 'white' : 'black'}>
				<span style={{ margin: 0, fontSize: '2.5vmin' }}>{userData.username}</span>
			</Username>
		</Section >
	)
}

export default memo(UserSection)