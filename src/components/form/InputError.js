import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
	color: red;
	font-size: 0.75rem;
	padding-left: 4px;
	height: 0.75rem;
`;

const InputError = ({ children }) => {
	return (
		<Error>
			{children}
		</Error>
	)
}

export default InputError