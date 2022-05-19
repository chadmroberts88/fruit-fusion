import { React, useState } from 'react'
import GamePanel from '../components/panels/GamePanel'
import LogInPanel from '../components/panels/LogInPanel'
import MenuPanel from '../components/panels/MenuPanel'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import HowToPlayPanel from '../components/panels/HowToPlayPanel'
import AccountPanel from '../components/panels/AccountPanel'
import { GameContext } from '../helper/Context'
import UpdateAccountPanel from '../components/panels/UpdateAccountPanel'

const StyledPanelContainer = styled.div`
    height: 84vh;
    width: 100vw;
    margin: 2vh 0 2vh 0;
    display: flex;
    justify-content: center;
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
        <GameContext.Provider value={{ score, setScore, level, setLevel, best, setBest, isNewGame, setIsNewGame, tiles, setTiles, tileIds, setTileIds }}>
            <StyledPanelContainer id="panel-container">
                <Routes>
                    <Route path='/' element={<LogInPanel />} />
                    <Route path='/account' element={<AccountPanel />} />
                    <Route path='/update-account' element={<UpdateAccountPanel />} />
                    <Route path='/menu' element={<MenuPanel />} />
                    <Route path='/how-to-play' element={<HowToPlayPanel />} />
                    <Route path='/game' element={<GamePanel initializeTiles={initializeTiles} />} />
                    <Route path='*' />
                </Routes>
            </StyledPanelContainer>
        </GameContext.Provider>
    )
}

export default PanelContainer