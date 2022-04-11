import React from 'react'

function Tile({ x, y, color }) {

    const tileStyles = {
        left: `calc(${x} * 11vmin)`,
        top: `calc(${y} * 11vmin)`,
    }

    return (
        <div className={`tile ${color}`} style={tileStyles}></div>
    )
}

export default Tile