import React from 'react'
import styled from 'styled-components'
import DashboardSection from './DashboardSection';

const StyledDashboard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10%;
`;

const Dashboard = ({ score, level, best }) => {
    return (
        <StyledDashboard id='dashboard'>
            <DashboardSection heading={"- SCORE -"} stat={score}></DashboardSection>
            <DashboardSection heading={"- LEVEL -"} stat={level}></DashboardSection>
            <DashboardSection heading={"- BEST -"} stat={best}></DashboardSection>
        </StyledDashboard>
    )
}

export default Dashboard
