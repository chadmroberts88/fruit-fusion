import React from 'react'

const Menu = ({ score, level }) => {
    return (
        <div className='menu'>
            <div className='level'>Level: {level}</div>
            <div className='score'>Score: {score}</div>
        </div>
    )
}

export default Menu
