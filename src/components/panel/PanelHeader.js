import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const PanelHeader = ({ children, text }) => {
	return (
		<Header>
			<h2>{text}</h2>
			{children}
		</Header>
	)
}

export default PanelHeader