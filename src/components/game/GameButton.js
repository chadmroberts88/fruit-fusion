import { React, memo, useContext } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { GameContext } from '../../context/GameContext';
import { UserContext } from '../../context/UserContext';

const heartbeat = keyframes`
	from {
		transform: scale(1);
		transform-origin: center center;
		animation-timing-function: ease-out;
	}

	1% {
		transform: scale(0.91);
		animation-timing-function: ease-in;
	}

	2% {
		transform: scale(0.98);
		animation-timing-function: ease-out;
	}

	3% {
		transform: scale(0.87);
		animation-timing-function: ease-in;
	}

	4%,
	100% {
		transform: scale(1);
		animation-timing-function: ease-out;
	}
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
    border: none;
    cursor: pointer;
    animation: ${heartbeat} 15s ease-in-out infinite both;
`;

const Img = styled.img`
	width: 8vmin;
	content: url(${propos => propos.imageUrl});
	user-select: none;
`;

const GameButton = ({ id, buttonDir }) => {

	const { darkModeOn } = useContext(UserContext);
	const { handleGameAction } = useContext(GameContext);
	const lightImageUrl = require('../../images/game-button-light.png');
	const darkImageUrl = require('../../images/game-button-dark.png');

	let imgStyle = {};

	if (buttonDir === 'up') {
		imgStyle = { transform: 'rotate(0deg)' };
	}

	if (buttonDir === 'down') {
		imgStyle = { transform: 'rotate(180deg)' };
	}

	if (buttonDir === 'left') {
		imgStyle = { transform: 'rotate(-90deg)' };
	}

	if (buttonDir === 'right') {
		imgStyle = { transform: 'rotate(90deg)' };
	}

	return (
		<Button id={id} onClick={() => { handleGameAction(id) }} >
			<Img imageUrl={darkModeOn ? darkImageUrl : lightImageUrl} style={imgStyle} />
		</Button>
	)
}

export default memo(GameButton)