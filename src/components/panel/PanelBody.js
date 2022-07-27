import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
	display: grid;
	grid-auto-rows: auto;
	row-gap: 20px;
`;

const PanelBody = ({ children }) => {
	return (
		<Body>
			{children}
		</Body>
	)
}

export default PanelBody