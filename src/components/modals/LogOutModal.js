import { React, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import SecondaryButton from '../panel/SecondaryButton'

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
    width: 68vmin;
    height: 68vmin;
    background-color: ${props => props.bgColor};
    display: grid;
    grid-template-rows: 15% 70% 15%;
    justify-items: center;
    position: relative;
    border-radius: 10px;
    z-index: 10;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Body = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
	justify-self: center;
    width: 90%;
	height: 100%;
	border: 1px solid #a2a2a2;
	border-radius: 10px;
    padding: 2vmin;
	overflow: hidden auto;
`;

const Content = styled.div`
	text-align: center;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const CreateAccountModal = ({ modalOpen, closeModal }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<> {modalOpen ?
			<Background bgColor={userData.darkModeOn ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"} >
				<Container bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
					<Header>
						<h2>Logged Out</h2>
					</Header>
					<Body>
						<Content>
							<p>You have been logged out of Fruit Fusion.</p>
							<p>You will be redirected to the Log In page.</p>
							<p>Thanks for playing!</p>
						</Content>
					</Body>
					<Footer>
						<SecondaryButton text={"Close"} handleClick={closeModal} />
					</Footer>
				</Container>
			</Background>
			: null}</>
	)
}

export default CreateAccountModal