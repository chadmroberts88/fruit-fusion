import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

import PrimaryButton from '../panel/PrimaryButton'
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
	width: 100%;
	text-align: center;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ModalImage = styled.img`
	justify-self: center;
    width: 40vmin;
    height: 28vmin;
	margin: 1vmin 0;
    content: url(${props => props.imageUrl});
`;

const ModalStats = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 2vmin 0;
`;

const StatsSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const GameOverModal = ({ modalOpen, closeModal }) => {

	const { userData, loggedIn } = useContext(UserDataContext);
	const navigate = useNavigate();

	const modalImageUrl = require('../../images/game-over.png');

	return (
		<> {modalOpen ?
			<Background bgColor={userData.darkModeOn ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"} >
				<Container bgColor={userData.darkModeOn ? "#333232" : "#f7d5b7"}>
					<Header>
						<h2>Game Over</h2>
					</Header>
					<Body>
						<Content>
							<ModalStats>
								<StatsSection>
									<h3>Score:</h3>
									<h4>{userData.score}</h4>
								</StatsSection>
								<StatsSection>
									<h3>Best:</h3>
									<h4>{userData.best}</h4>
								</StatsSection>
							</ModalStats>

							{
								loggedIn ?
									<ModalImage imageUrl={modalImageUrl} /> :
									<p>Your score won't be posted to the leaderboard when playing as a Guest. Would you like to create an account so your future scores will be saved?</p>
							}

							{
								loggedIn ?
									null :
									<PrimaryButton text={'Create Account'} handleClick={() => { navigate('/create-account') }} />
							}

						</Content>
					</Body>
					<Footer>
						<SecondaryButton text={"New Game"} handleClick={closeModal} />
					</Footer>
				</Container>
			</Background>
			: null}</>
	)
}

export default GameOverModal