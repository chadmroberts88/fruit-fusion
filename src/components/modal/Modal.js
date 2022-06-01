import { React, useContext } from 'react'
import { UserDataContext } from '../../helper/Context'
import styled from 'styled-components'

import SecondaryButton from '../panel/SecondaryButton';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColor};
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 68vmin;
    height: 68vmin;
    background-color: ${props => props.bgColor};
    display: grid;
    grid-template-rows: 20% 60% 20%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Modal = ({ headerText, modalOpen, closeModal, children }) => {

	const { darkModeOn } = useContext(UserDataContext);

	return (
		<> {modalOpen ?
			<Background bgColor={darkModeOn ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"} >
				<Container bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
					<Header>
						<h2>{headerText}</h2>
					</Header>
					<Body>
						{children}
					</Body>
					<Footer>
						<SecondaryButton text={"Close"} handleClick={closeModal} />
					</Footer>
				</Container>
			</Background>
			: null}</>
	)
}

export default Modal