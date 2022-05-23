import React from 'react'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import SecondaryButton from '../panelComponents/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import LeaderboardEntry from '../panelComponents/LeaderboardEntry'
import { FaAward } from 'react-icons/fa'
import PanelFrame from '../panelComponents/PanelFrame'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

const LeaderboardHeader = styled.div`
    display: grid;
    grid-template-columns: 16% 32% 22% 18%;
    column-gap: 4%;
    justify-items: center;
    align-items: center;
    width: 90%;
    height: 12%;
    padding: 0 2vmin;
`;

const Leaderboard = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, fit-content);
    width: 90%;
    height: 88%;
    overflow: hidden auto;
    border: 1px solid #a2a2a2;
    border-radius: 10px;
    padding: 2vmin;
`;


const LeaderboardPanel = () => {

    const navigate = useNavigate();

    const navigateToMenu = () => {
        navigate('/menu');
    }

    let image = require("../../images/account-photo.jpeg");

    return (
        <PanelFrame id="about-panel">
            <PanelHeader text={'Leaderboard'} />
            <PanelBody>
                <Content>
                    <LeaderboardHeader>
                        <h3><FaAward style={{ marginTop: "0.75vmin" }} /></h3>
                        <h3>Player</h3>
                        <h3>Score</h3>
                        <h3>Level</h3>
                    </LeaderboardHeader>
                    <Leaderboard>
                        <LeaderboardEntry image={image} username={"JimLahey"} score={14328} level={5} />
                    </Leaderboard>
                </Content>
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={'Back'} handleClick={navigateToMenu} />
            </PanelFooter>
        </PanelFrame>
    )
}

export default LeaderboardPanel