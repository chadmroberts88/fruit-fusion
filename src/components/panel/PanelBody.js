import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
	display: grid;
    height: 72%;
	width: 100%;
`;

const Content = styled.div`
	justify-self: center;
	width: 90%;
	border: 1px solid #a2a2a2;
	border-radius: 10px;
	padding: 2vmin;
	overflow: hidden auto;

	display: grid;
    justify-items: center;
    align-items: center;
`;

const PanelBody = (props) => {
	return (
		<Body>
			<Content>
				{props.children}
			</Content>
		</Body>
	)
}

export default PanelBody