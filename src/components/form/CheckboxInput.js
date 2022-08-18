import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Input = styled.input`
	height: 20px;
	width: 20px;
	margin-right: 10px;
`;

const CheckboxInput = ({ checked, onChange }, ref) => {
	return (
		<Input
			type='checkbox'
			checked={checked}
			onChange={onChange}
			ref={ref} />
	)
}

export default forwardRef(CheckboxInput)