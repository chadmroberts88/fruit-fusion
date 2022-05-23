import { React, useState } from 'react'
import GamePanel from '../components/panels/GamePanel'
import LogInPanel from '../components/panels/LogInPanel'
import MenuPanel from '../components/panels/MenuPanel'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import HowToPlayPanel from '../components/panels/HowToPlayPanel'
import AccountPanel from '../components/panels/AccountPanel'
import { GameContext } from '../helper/Context'
import CreateAccountPanel from '../components/panels/CreateAccountPanel'
import AboutPanel from '../components/panels/AboutPanel'
import LeaderboardPanel from '../components/panels/LeaderboardPanel'

const StyledPanelContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
`;

const PanelContainer = () => {

    const gridSize = 5;
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [best, setBest] = useState(0);
    const [isNewGame, setIsNewGame] = useState(false);
    const [tiles, setTiles] = useState(initializeTiles);
    const [tileIds, setTileIds] = useState(0);
    const [soundOn, setSoundOn] = useState(true);
    const [gameInProgress, setGameInProgress] = useState(false);

    function initializeTiles() {
        let initialTiles = [];
        for (let i = 0; i < gridSize; i++) {
            initialTiles[i] = [];
            for (let j = 0; j < gridSize; j++) {
                initialTiles[i][j] = 0
            }
        }
        return initialTiles;
    }

    return (
        <GameContext.Provider value={{ score, setScore, level, setLevel, best, setBest, isNewGame, setIsNewGame, tiles, setTiles, tileIds, setTileIds, soundOn, setSoundOn, gameInProgress, setGameInProgress }}>
            <StyledPanelContainer id="panel-container">
                <Routes>
                    <Route path='/' element={<LogInPanel />} />
                    <Route path='/account' element={<AccountPanel />} />
                    <Route path='/create-account' element={<CreateAccountPanel />} />
                    <Route path='/menu' element={<MenuPanel />} />
                    <Route path='/how-to-play' element={<HowToPlayPanel />} />
                    <Route path='/about' element={<AboutPanel />} />
                    <Route path='/leaderboard' element={<LeaderboardPanel />} />
                    <Route path='/game' element={<GamePanel initializeTiles={initializeTiles} />} />
                    <Route path='*' />
                </Routes>
            </StyledPanelContainer>
        </GameContext.Provider>
    )
}

export default PanelContainer