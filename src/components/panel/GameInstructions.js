import React from 'react'
import styled from 'styled-components'
import SocialLink from './SocialLink';

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

const HorzRule = styled.hr`
	margin: 10px 0px;
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
			<p>The objective of the game is to fuse as many pairs of like-colored fruit as possible until there are no more moves that can be made.</p>
			<p>A pair of red fruit fuses to produce an orange fruit, a pair of orange fruit fuses into a yellow fruit, and so on. The number of points you earn for each fusion increases as you work your way through the colors of the rainbow.</p>
			<strong>Red + Red = 10 pts.</strong>
			<ImageSection>
				<Image imageUrl={apple} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={strawberry} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={cherries} alt="apple"></Image>
			</ImageSection>
			<strong>Orange + Orange = 20 pts.</strong>
			<ImageSection>
				<Image imageUrl={orange} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={pumpkin} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={mango} alt="apple"></Image>
			</ImageSection>
			<strong>Yellow + Yellow = 30 pts.</strong>
			<ImageSection>
				<Image imageUrl={bananas} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={lemon} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={pineapple} alt="apple"></Image>
			</ImageSection>
			<strong>Green + Green = 40 pts.</strong>
			<ImageSection>
				<Image imageUrl={pear} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={lime} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={melon} alt="apple"></Image>
			</ImageSection>
			<strong>Blue + Blue = 50 pts.</strong>
			<ImageSection>
				<Image imageUrl={blueberries} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={blueberry1} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={blueberry2} alt="apple"></Image>
			</ImageSection>
			<strong>Purple + Purple = 60 pts.</strong>
			<ImageSection>
				<Image imageUrl={grapes} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={plum} alt="apple"></Image>
				<span>or</span>
				<Image imageUrl={eggplant} alt="apple"></Image>
			</ImageSection>
			<p>Once you have made it through all six colors you will
				have collected a basket of fruit and your <strong>points multiplier </strong>
				will increase. The more baskets of fruit you collect, the more points you can earn!
				<strong> Baskets of fruit cannot be fused.</strong></p>
			<p>Good luck!</p>
			<HorzRule />
			<p>
				Fruit Fusion was developed by Chad Roberts. Check out more of my
				work on <SocialLink link='https://www.linkedin.com/in/chadmroberts88'>LinkedIn</SocialLink> or <SocialLink link='https://github.com/chadmroberts88'>Github</SocialLink>.
			</p>
		</Instructions>
	)
}

export default GameInstructions