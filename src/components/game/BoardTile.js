import { React, memo, useContext } from 'react'
import { motion } from 'framer-motion'
import { GamePlayContext } from '../../helper/Context'
import styled from 'styled-components'

const Tile = styled.img`
	position: absolute;
    width: ${props => props.cellSize};
	height: ${props => props.cellSize};
    border-radius: 2vmin;
    content: url(${props => props.imageUrl});
	user-select: none;
`;

const BoardTile = ({ x, y, color }) => {

	const { cellSize, gapSize } = useContext(GamePlayContext);

	let imageUrl = '';

	switch (color) {
		case 'red-0':
			imageUrl = require('../../images/red-0.png');
			break;
		case 'red-1':
			imageUrl = require('../../images/red-1.png');
			break;
		case 'red-2':
			imageUrl = require('../../images/red-2.png');
			break;
		case 'orange-0':
			imageUrl = require('../../images/orange-0.png');
			break;
		case 'orange-1':
			imageUrl = require('../../images/orange-1.png');
			break;
		case 'orange-2':
			imageUrl = require('../../images/orange-2.png');
			break;
		case 'yellow-0':
			imageUrl = require('../../images/yellow-0.png');
			break;
		case 'yellow-1':
			imageUrl = require('../../images/yellow-1.png');
			break;
		case 'yellow-2':
			imageUrl = require('../../images/yellow-2.png');
			break;
		case 'green-0':
			imageUrl = require('../../images/green-0.png');
			break;
		case 'green-1':
			imageUrl = require('../../images/green-1.png');
			break;
		case 'green-2':
			imageUrl = require('../../images/green-2.png');
			break;
		case 'blue-0':
			imageUrl = require('../../images/blue-0.png');
			break;
		case 'blue-1':
			imageUrl = require('../../images/blue-0.png');
			break;
		case 'blue-2':
			imageUrl = require('../../images/blue-2.png');
			break;
		case 'purple-0':
			imageUrl = require('../../images/purple-0.png');
			break;
		case 'purple-1':
			imageUrl = require('../../images/purple-1.png');
			break;
		case 'purple-2':
			imageUrl = require('../../images/purple-2.png');
			break;
		case 'basket-0':
		case 'basket-1':
		case 'basket-2':
			imageUrl = require('../../images/basket.png');
			break;
		default:
			imageUrl = '';
	}



	return (
		<motion.div initial={false} animate={{ x: `calc(${x} * (${cellSize} + ${gapSize}))`, y: `calc(${y}* (${cellSize} + ${gapSize}))` }}>
			<Tile className={`tile`} imageUrl={imageUrl} cellSize={cellSize} />
		</motion.div >
	)
}

export default memo(BoardTile)