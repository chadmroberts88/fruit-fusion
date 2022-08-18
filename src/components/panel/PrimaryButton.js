import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
		display: flex;
		align-items: center;
		justify-content: center;
    height: 34px;
    width: fit-content;
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

		:disabled {
			cursor: not-allowed;
			opacity: 0.6;
		}

`;

const PrimaryButton = ({ text, handleClick, disabled }) => {

	return (
		<Button
			onClick={() => { handleClick() }}
			disabled={disabled}
		>
			{text}
		</Button>
	)
}

export default PrimaryButton