import { React, useContext } from 'react'
import styled from 'styled-components'
import DashboardSection from './DashboardSection'
import { GameContext } from '../../helper/Context'
import MenuButton from '../header/MenuButton';
import ProfileButton from '../header/ProfileButton';

const StyledDashboard = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 2%;
    align-items: center;

    @media screen and (orientation:portrait) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        column-gap: 2%;
    }

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
