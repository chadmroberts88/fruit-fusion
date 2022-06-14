import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const OptionsSection = (props) => {

	return (
		<Section>
			{props.children}
		</Section>
	)
}

export default OptionsSection