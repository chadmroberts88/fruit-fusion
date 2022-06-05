import React from 'react'
import styled from 'styled-components'

const StyledSecondaryButton = styled.button`
    height: 6vmin;
    width: 34vmin;
    background-color: #a2a2a2;
    color: black;
    border: none;
    border-radius: 10px;
    font-size: 2.75vmin;
    font-weight: bold;
    cursor: pointer;

    :hover {
        background-color: lightgrey;
    }

`;

const SecondaryButton = ({ text, handleClick }) => {
	return (
		<StyledSecondaryButton onClick={() => { handleClick(); }}>
			{text}
		</StyledSecondaryButton>
	)
}

export default SecondaryButton