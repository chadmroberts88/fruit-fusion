import { React, memo, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledTile = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vmin;
  height: 10vmin;
  border-radius: 1vmin;
`;

const Tile = ({ x, y, color }) => {
    return (
        <motion.div initial={false} animate={{ x: `calc(${x}*11vmin)`, y: `calc(${y}*11vmin)` }}>
            <StyledTile className={`tile ${color}`} xPos={x} yPos={y}></StyledTile>
        </motion.div >
    )
}

export default memo(Tile)