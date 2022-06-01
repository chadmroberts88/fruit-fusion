import React from 'react'
import styled from 'styled-components'

const StyledPanelBody = styled.div`
	display: grid;
    height: 72%;
	width: 100%;
`;

const PanelBody = (props) => {
	return (
		<StyledPanelBody>
			{props.children}
		</StyledPanelBody>
	)
}

export default PanelBody