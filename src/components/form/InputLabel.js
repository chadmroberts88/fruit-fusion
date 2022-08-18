import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
	display: flex;
	align-items: center;
	padding-left: 4px;
	font-size: 0.75rem;
`;

const InputLabel = ({ text }) => {
	return (
		<Label>
			{text}
		</Label>
	)
}

export default InputLabel