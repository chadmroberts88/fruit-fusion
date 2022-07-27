import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
	display: flex;
	align-items: center;
`;

const MenuItem = ({ children }) => {
	return (
		<Item>
			{children}
		</Item>
	)
}

export default MenuItem