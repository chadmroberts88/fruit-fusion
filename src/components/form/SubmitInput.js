import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 34px;
	width: fit-content;
	padding: 10px;
	background-color: #F25C54;
	color: white;
	font-size: 1rem;
	line-height: 1rem;
	border: none;
	border-radius: 6px;
	cursor: pointer;

	:hover {
			background-color: #FF847E;
	}

`;

const SubmitInput = ({ value }, ref) => {
	return (
		<Input
			type='submit'
			value={value}
			ref={ref}
		/>
	)
}

export default forwardRef(SubmitInput)