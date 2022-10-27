import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Instructions = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

const ImageSection = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5vmin;
`;

const Image = styled.img`
	display: inline-block;
	height: 7vmin;
	width: 7vmin;
	content: url(${props => props.imageUrl});
`;

const GameInstructions = () => {

	const apple = require('../../images/red-0.png');
	const strawberry = require('../../images/red-1.png');
	const cherries = require('../../images/red-2.png');
	const orange = require('../../images/orange-0.png');
	const pumpkin = require('../../images/orange-1.png');
	const mango = require('../../images/orange-2.png');
	const bananas = require('../../images/yellow-0.png');
	const lemon = require('../../images/yellow-1.png');
	const pineapple = require('../../images/yellow-2.png');
	const pear = require('../../images/green-0.png');
	const lime = require('../../images/green-1.png');
	const melon = require('../../images/green-2.png');
	const blueberries = require('../../images/blue-0.png');
	const blueberry1 = require('../../images/blue-1.png');
	const blueberry2 = require('../../images/blue-2.png');
	const grapes = require('../../images/purple-0.png');
	const plum = require('../../images/purple-1.png');
	const eggplant = require('../../images/purple-2.png');

	return (
		<Instructions>
			<Typography>To play, shift the fruit in any of the rows to the right or the left. You may also shift the fruit in any of the columns to the top or the bottom. Adjacent fruit of like-colors will fuse to produce another color: a pair of red fruit fuses to produce an orange fruit, a pair of orange fruit fuses into a yellow fruit, and so on. The number of points you earn for each fusion increases as you work your way through the colors of the rainbow.</Typography>
			<Typography fontWeight='bold'>Red + Red = 10 pts.</Typography>
			<ImageSection>
				<Image imageUrl={apple} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={strawberry} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={cherries} alt="apple"></Image>
			</ImageSection>
			<Typography fontWeight='bold'>Orange + Orange = 20 pts.</Typography>
			<ImageSection>
				<Image imageUrl={orange} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={pumpkin} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={mango} alt="apple"></Image>
			</ImageSection>
			<Typography fontWeight='bold'>Yellow + Yellow = 30 pts.</Typography>
			<ImageSection>
				<Image imageUrl={bananas} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={lemon} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={pineapple} alt="apple"></Image>
			</ImageSection>
			<Typography fontWeight='bold'>Green + Green = 40 pts.</Typography>
			<ImageSection>
				<Image imageUrl={pear} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={lime} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={melon} alt="apple"></Image>
			</ImageSection>
			<Typography fontWeight='bold'>Blue + Blue = 50 pts.</Typography>
			<ImageSection>
				<Image imageUrl={blueberries} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={blueberry1} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={blueberry2} alt="apple"></Image>
			</ImageSection>
			<Typography fontWeight='bold'>Purple + Purple = 60 pts.</Typography>
			<ImageSection>
				<Image imageUrl={grapes} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={plum} alt="apple"></Image>
				<Typography>or</Typography>
				<Image imageUrl={eggplant} alt="apple"></Image>
			</ImageSection>
			<Typography>Once you have made it through all six colors you will
				have collected a basket of fruit and your <strong>points multiplier </strong>
				will increase. The more baskets of fruit you collect, the more points you can collect!
				<strong> Baskets of fruit cannot be fused.</strong></Typography>
			<Typography>Fuse as many pairs of fruit as you can before running out of moves. Your highest score will be published to the leaderboard.</Typography>
			<Typography>Good luck!</Typography>
		</Instructions>
	)
}

export default GameInstructions;