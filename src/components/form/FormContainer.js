import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 10px;
	width: 100%;
	height: 100%;
`;

const FormContainer = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	)
}

export default FormContainer