import React from 'react'
import styled from 'styled-components'
import Tile from '../components/Tile'

const StyledTilesContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 2vmin;
    width: calc(${props => props.gridSize} * 10vmin + (${props => props.gridSize} - 1) * 1vmin);
    height: calc(${props => props.gridSize} * 10vmin + (${props => props.gridSize} - 1) * 1vmin);
`;

const TilesContainer = ({ gridSize, tiles }) => {

    const tileColors = ["red", "orange", "yellow", "green", "blue", "purple", "basket"]
    const tileComponents = [];

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (tiles[i][j] !== 0) {
                tileComponents.push(<Tile key={tiles[i][j].id} x={i} y={j} color={`${tileColors[tiles[i][j].colorCode]}-${tiles[i][j].typeCode}`} />);
            }
        }
    }

    return (
        <StyledTilesContainer id="tiles-container" gridSize={gridSize}>
            {tileComponents}
        </StyledTilesContainer>
    )
}

export default TilesContainer