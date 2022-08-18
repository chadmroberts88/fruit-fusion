import { React, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

const Frame = styled.div`
	background-color: ${props => props.bgColor};
	box-shadow: 8px 8px 10px 0px rgba(0,0,0,0.5);
	padding: 25px;
	width: 80%;
	max-width: 500px;
	height: 90%;
	border-radius: 10px;
`;

const PanelFrame = ({ id, children }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<Frame id={id} bgColor={userData.darkModeOn ? '#282828' : '#96E072'}>
			{children}
		</Frame>
	)
}

export default PanelFrame