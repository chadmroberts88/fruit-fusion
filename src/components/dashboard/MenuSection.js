import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (orientation: landscape) {
		flex-direction: row;
	}

	@media screen and (orientation: portrait) {
		flex-direction: row;
	}

`;

const MenuSection = ({ children }) => {
	return (
		<Section>
			{children}
		</Section>
	)
}

export default MenuSection