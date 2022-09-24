import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
	height: 84%;
	background-color: #F0FFF2;
	padding: 10px;
	border-radius: 10px;
	overflow: hidden auto;
`;

const ContentSection = ({ children }) => {
	return (
		<Content>
			{children}
		</Content>
	)
}

export default ContentSection;