import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	row-gap: 20px;
`;

const PanelBodyFlex = ({ children }) => {
	return (
		<Body>
			{children}
		</Body>
	)
}

export default PanelBodyFlex