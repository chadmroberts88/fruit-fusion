import { React, memo } from 'react'
import styled from 'styled-components'

const Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

const TitleSection = () => {
	return (
		<Section id='title'>
			<h1>Fruit Fusion</h1>
		</Section>
	)
}

export default memo(TitleSection)