import { React, memo } from 'react'

const Cell = () => {

    console.log("cell rendered");

    return (
        <div className="cell"></div>
    )
}

export default memo(Cell)