import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
		display: flex;
		align-items: center;
		justify-content: center;
    height: 40px;
    width: 40%;
		padding: 10px;
    background-color: #F25C54;
    color: white;
		font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    :hover {
        background-color: #FF847E;
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