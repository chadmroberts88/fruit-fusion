import React from 'react'
import styled from 'styled-components'
import ToggleSwitch from './ToggleSwitch'

const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
	justify-items: center;
	text-align: center;
    width: 40%;
`;

const ToggleSection = ({ label, toggleId, isChecked, handleToggle }) => {
	return (
		<Section>
			<h4>Off</h4>
			<ToggleSwitch toggleId={toggleId} isChecked={isChecked} handleToggle={handleToggle} />
			<h4>On</h4>
		</Section>
	)
}

export default ToggleSection