import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
		display: flex;
		align-items: center;
		justify-content: center;
    height: 34px;
    width: fit-content;
		padding: 10px;
    background-color: transparent;
    color: #d35b40;
		font-size: 1rem;
    border: 2px solid #d35b40;
    border-radius: 6px;
    cursor: pointer;

    :hover {
        border-color: #e86a4e;
				color: #e86a4e;
    }

		:disabled {
			cursor: not-allowed;
			opacity: 0.6;
		}

`;

const SecondaryButton = ({ text, handleClick, disabled }) => {
	return (
		<Button
			onClick={() => { handleClick() }}
			disabled={disabled}
		>
			{text}
		</Button>
	)
}

export default SecondaryButton