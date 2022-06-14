import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import SecondaryButton from '../../components/panel/SecondaryButton'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgColor};
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
	z-index: 10;
`;

const Container = styled.div`
    width: 80vw;
    height: 80vh;
	padding: 4vmin;
    background-color: ${props => props.bgColor};
    display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
	row-gap: 2vmin;
    position: relative;
    border-radius: 10px;
    z-index: 10;
`;

const Image = styled.img`
	justify-self: center;
    width: 50vmin;
    height: 20vmin;
	margin: 1vmin 0;
    content: url(${props => props.imageUrl});
`;

const ErrorPanel = () => {

	const { userData } = useContext(UserDataContext);
	const navigate = useNavigate();

	const imageUrl = require('../../images/error.png');

	return (
		<Background bgColor={userData.darkModeOn ? "#000000" : "#ffffef"} >
			<Container bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
				<h1>Error 404</h1>
				<h2>Page Not Found</h2>
				<h4>The requested page does not exist.</h4>
				<Image imageUrl={imageUrl} />
				<SecondaryButton text={'Back'} handleClick={() => { navigate(-1) }} />
			</Container>
		</Background>
	)
}

export default ErrorPanel