import React, { useState, forwardRef } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

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

const IconContainer = styled.div`
	font-size: 1.25rem;
	position: absolute;
	right: 10px;
	margin-top: 4px;
	cursor: pointer;
`;


const PasswordInput = ({ placeholder, onChange }, ref) => {

	const [showPass, setShowPass] = useState(false);

	return (
		<Container>
			<Input
				type={showPass ? 'text' : 'password'}
				placeholder={placeholder}
				onChange={onChange}
				ref={ref}
			/>
			<IconContainer
				onClick={() => { setShowPass(!showPass) }}
			>
				{showPass ? <BsEyeSlashFill /> : <BsEyeFill />}
			</IconContainer>
		</Container>
	)
}

export default forwardRef(PasswordInput)