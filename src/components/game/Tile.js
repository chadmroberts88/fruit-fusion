import { React, memo } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledTile = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vmin;
  height: 10vmin;
  border-radius: 1vmin;
  content: url(${props => props.imageUrl});
`;

const Tile = ({ x, y, color }) => {

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
        <motion.div initial={false} animate={{ x: `calc(${x}*11vmin)`, y: `calc(${y}*11vmin)` }}>
            <StyledTile className={`tile`} imageUrl={imageUrl}></StyledTile>
        </motion.div >
    )
}

export default memo(Tile)