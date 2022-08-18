import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = styled.input`
	background-color: ${props => props.bgColor};
  height: 2rem;
	width: 100%;
	border: 2px solid #a2a2a2;
	color: black;
	font-size: 1rem;
	border-radius: 6px;
	padding: 6px;

	::placeholder {
		color: #a2a2a2;
		font-size: 1rem;
	}

	:focus {
		border-color: #F25C54;
		outline: none;
	}

`;

const EmailInput = ({ type, placeholder, bgColor, onChange }, ref) => {
	return (
		<Input
			type={type}
			placeholder={placeholder}
			bgColor={bgColor}
			onChange={onChange}
			ref={ref}
		/>
	)
}

export default forwardRef(EmailInput)