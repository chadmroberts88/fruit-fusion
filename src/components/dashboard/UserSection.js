import { React, memo, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import PhotoSection from '../panel/PhotoSection'

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Username = styled.div`
	white-space: nowrap;
	color: ${props => props.color};
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
`;

const UserSection = ({ children }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<Section id='user-section'>
			<PhotoSection size={'10vmin'} />
			{/* <Username color={userData.darkModeOn ? 'white' : 'black'}>
				{userData.username}
			</Username> */}
			{children}
		</Section >
	)
}

export default memo(UserSection)