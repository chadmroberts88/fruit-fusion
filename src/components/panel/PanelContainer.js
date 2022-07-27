import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserDataContext } from '../../context/UserDataContext';

const Container = styled.div`
	background-color: ${props => props.color};
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PanelContainer = ({ children }) => {

	const { userData } = useContext(UserDataContext)

	return (
		<Container color={userData.darkModeOn ? '#000000' : '##E8FCCF'}>
			{children}
		</Container>
	)
}

export default PanelContainer