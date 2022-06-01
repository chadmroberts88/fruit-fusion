import { React } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: relative;
	justify-self: flex-end;
`;

const Label = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 7vmin;
	height: 4vmin;
	border-radius: 3vmin;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 3vmin;
		height: 3vmin;
		margin: 0.5vmin;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: margin-left 0.2s;
	}
`;

const Input = styled.input.attrs({
	type: 'checkbox'
})`
	opacity: 0;
	z-index: 1;
	width: 7vmin;
	height: 3.5vmin;
	border-radius: 3vmin;
	&:checked + ${Label} {
		background: #4fbe79;
		&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 3vmin;
		height: 3vmin;
		margin-left: 3.5vmin;
		transition: margin-left 0.2s;
		}
	}
`;

const ToggleSwitch = ({ toggleId, isChecked, handleToggle }) => {
	return (
		<Wrapper>
			<Input id={toggleId} checked={isChecked} onChange={(event) => handleToggle(event.currentTarget.checked)} />
			<Label id={`${toggleId}-label`} htmlFor={toggleId} />
		</Wrapper>
	)
}

export default ToggleSwitch