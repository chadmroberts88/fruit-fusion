import { React, memo } from 'react'

const Tile = ({ x, y, color }) => {

    console.log("tile renderd");

    const tileStyles = {
        left: `calc(${x} * 11vmin)`,
        top: `calc(${y} * 11vmin)`,
    }

    return (
        <div className={`tile ${color}`} style={tileStyles}></div>
    )
}

export default memo(Tile)