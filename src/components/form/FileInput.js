import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = styled.input`
	color: black;
	font-size: 0.75rem;
	width: 100%;

	::-webkit-file-upload-button,
	::file-selector-button {
		height: 22px;
		background-color: #F25C54;
		color: white;
		border: none;
		border-radius: 6px;
		font-size: 0.75rem;
		cursor: pointer;
	}

	::-webkit-file-upload-button:hover,
	::file-selector-button:hover {
		background-color: #FF847E;
	}

`;

const FileInput = ({ type, accept }, ref) => {
	return (
		<Input
			type={type}
			accept={accept}
			ref={ref}
		/>
	)
}

export default forwardRef(FileInput)