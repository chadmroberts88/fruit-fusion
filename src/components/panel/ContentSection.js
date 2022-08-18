import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
	height: 100%;
	background-color: #F0FFF2;
	padding: 10px;
	/* border: 1px solid black; */
	border-radius: 10px;
	overflow: hidden auto;
`;

const ContentSection = ({ children }) => {
	return (
		<Content className='content-section'>
			{children}
		</Content>
	)
}

export default ContentSection