import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import PrimaryButton from '../panel/PrimaryButton'
import SecondaryButton from '../panel/SecondaryButton'
import { GameContext } from '../../context/GameContext'

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

const ResetGameModal = ({ modalOpen, closeModal }) => {

	const { userData } = useContext(UserDataContext);
	const { setNewGame } = useContext(GameContext);
	const navigate = useNavigate();

	const startNewGame = () => {
		setNewGame(true);
		navigate('/game');
	}

	return (
		<> {modalOpen ?
			<Background bgColor={userData.darkModeOn ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"} >
				<Container bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
					<Header>
						<h2>Reset Game</h2>
					</Header>
					<Body>
						<Content>
							<p>You are about to throw your fruit in the trash and start a new game. Are you sure?</p>
							<PrimaryButton text={'Reset Game'} handleClick={startNewGame} />
						</Content>
					</Body>
					<Footer>
						<SecondaryButton text={"Cancel"} handleClick={closeModal} />
					</Footer>
				</Container>
			</Background>
			: null}</>
	)
}

export default ResetGameModal