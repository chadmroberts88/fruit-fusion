import React from 'react'

const Dashboard = ({ score, level, best }) => {
    return (
        <div className='dashboard'>
            <div className='dashboard-section'>
                <h2>- SCORE -</h2>
                <h3>{score}</h3>
            </div>
            <div className='dashboard-section'>
                <h2>- LEVEL -</h2>
                <h3>{level}</h3>
            </div>
            <div className='dashboard-section'>
                <h2>- BEST -</h2>
                <h3>{best}</h3>
            </div>
        </div>
    )
}

export default Dashboard
