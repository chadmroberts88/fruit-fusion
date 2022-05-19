import { React, useContext } from 'react'
import styled from 'styled-components'
import DashboardSection from './DashboardSection'
import { GameContext } from '../../helper/Context'

const StyledDashboard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10%;
`;

const Dashboard = () => {

    const { score } = useContext(GameContext);
    const { level } = useContext(GameContext);
    const { best } = useContext(GameContext);

    return (
        <StyledDashboard id='dashboard'>
            <DashboardSection heading={"- Score -"} stat={score}></DashboardSection>
            <DashboardSection heading={"- Level -"} stat={level}></DashboardSection>
            <DashboardSection heading={"- Best -"} stat={best}></DashboardSection>
        </StyledDashboard>
    )
}

export default Dashboard
