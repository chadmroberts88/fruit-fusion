import { React, memo } from 'react'
import styled from 'styled-components'

const Section = styled.div`
	display: grid;
	justify-items: center;
	align-items: center;
    border: 1px solid #a2a2a2;
    border-radius: 10px;
    padding: 1vmin;
	white-space: nowrap;
`;

const StatSection = ({ heading, stat }) => {
	return (
		<Section className="stat-section">
			<h3>{heading}</h3>
			<h4>{stat}</h4>
		</Section>
	)
}

export default memo(StatSection)