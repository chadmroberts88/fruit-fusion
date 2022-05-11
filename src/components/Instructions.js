import React from 'react'
import styled from 'styled-components'

const StyledInstructions = styled.div`
    width: 80%;
    height: 100%;
    overflow: hidden scroll;
`

const Instructions = () => {

    const instructions = [
        "The objective of the game is to fuse as many pairs of like-colored fruit as possible until no more moves can be made.",
        "A pair of red fruit fuses to produce an orange fruit, a pair of orange fruit fuses into a yellow fruit, and so on. The number of points you earn for each fusion increases as you work your way through the colors of the rainbow.",
        "Red + Red = 10 pts. → Orange + Orange = 20 pts. → Yellow + Yellow = 30 pts. → Green + Green = 40 pts. → Blue + Blue = 50 pts. → Purple + Purple = 60 pts.",
        "Once you have made it through all six colors you will have collected a basket of fruit and will move to the next level. Points earned for each fusion are multiplied by your current level, so try to collect as many fruit baskets as you can. Fruit baskets cannot be fused. Good luck!"
    ]

    return (
        <StyledInstructions>
            {instructions.map((item, i) => {
                return <p key={i}>{item}</p>;
            })}
        </StyledInstructions>
    )
}

export default Instructions