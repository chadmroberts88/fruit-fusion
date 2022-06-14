import { React, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'


const Frame = styled.div`
	background-color: ${props => props.bgColor};
	border-radius: 10px;
	overflow: hidden;

	@media screen and (orientation: landscape) {
		width: 70vmin;
		height: 80vmin;
	}

	@media screen and (orientation: portrait) {
		width: 80vw;
		height: 70vh;
	}

`;

const PanelFrame = ({ id, children }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<Frame id={id} bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
			{children}
		</Frame>
	)
}

export default PanelFrame