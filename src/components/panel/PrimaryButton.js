import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    height: 6vmin;
    width: 34vmin;
    background-color: #d35b40;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 2.75vmin;
    font-weight: bold;
    margin: 1.5vmin;
    cursor: pointer;

    :hover {
        background-color: #e86a4e;
    }

`;

const PrimaryButton = ({ text, handleClick }) => {

	return (
		<Button onClick={() => { handleClick() }}>
			{text}
		</Button>
	)
}

export default PrimaryButton