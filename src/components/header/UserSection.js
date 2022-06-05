import { React, memo, useContext } from 'react'
import { UserDataContext } from '../../helper/Context'
import styled from 'styled-components'

import PhotoSection from '../panel/PhotoSection'

const Section = styled.div`
	display: grid;
	row-gap: 0.5vmin;
`;

const Username = styled.div`
	white-space: nowrap;
	color: white;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
`;

const UserSection = () => {

	const { username, loggedIn } = useContext(UserDataContext);

	return (
		<Section id='user-section'>
			<PhotoSection size={'8vmin'} />
			<Username>
				<span style={{ margin: 0, fontSize: '2.5vmin' }}>{username}</span>
			</Username>
		</Section >
	)
}

export default memo(UserSection)