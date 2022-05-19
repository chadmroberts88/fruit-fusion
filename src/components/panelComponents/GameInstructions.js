import React from 'react'
import styled from 'styled-components'

const Instructions = styled.div`
    width: 80%;
    height: 100%;
    overflow: hidden scroll;
    border: 1px solid white;
    border-radius: 10px;
    padding: 2vmin;
`;

const GameInstructions = () => {

    return (
        <Instructions>
            <p>The objective of the game is to fuse as many pairs of like-colored fruit as possible until no more moves can be made.</p>
            <p>A pair of red fruit fuses to produce an orange fruit, a pair of orange fruit fuses into a yellow fruit, and so on. The number of points you earn for each fusion increases as you work your way through the colors of the rainbow.</p>
            <p>Red + Red = 10 pts.</p>
            <p>Orange + Orange = 20 pts.</p>
            <p>Yellow + Yellow = 30 pts.</p>
            <p>Green + Green = 40 pts.</p>
            <p>Blue + Blue = 50 pts.</p>
            <p>Purple + Purple = 60 pts.</p>
            <p>Once you have made it through all six colors you will have collected a basket of fruit and will move to the next level. Points earned for each fusion are multiplied by your current level, so try to collect as many fruit baskets as you can. <strong>Fruit baskets cannot be fused.</strong> Good luck!</p >
        </Instructions>
    )
}

export default GameInstructions