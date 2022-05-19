import { React, memo } from 'react'
import styled from 'styled-components'

const StyledCell = styled.div`
    background-color: lightgrey;
    border-radius: 1vmin;
`;

const Cell = () => {
    return (
        <StyledCell className="cell"></StyledCell>
    )
}

export default memo(Cell)