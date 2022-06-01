import React from 'react'
import styled from 'styled-components'

const StyledPrimaryButton = styled.button`
    height: 6vmin;
    width: 26vmin;
    background-color: #d35b40;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 2.5vmin;
    font-weight: bold;
    margin: 2vmin;
    cursor: pointer;

    :hover {
        background-color: #e86a4e;
    }

`;

const PrimaryButton = ({ text, handleClick }) => {

	return (
		<StyledPrimaryButton onClick={() => { handleClick(); }}>
			{text}
		</StyledPrimaryButton>
	)
}

export default PrimaryButton