import React from 'react'
import styled from 'styled-components'
import ToggleSwitch from './ToggleSwitch'

const Section = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    align-items: center;
    width: 60%;
    margin: 2%;
`;

const ToggleSection = ({ label, toggleId, isChecked, handleToggle }) => {
    return (
        <Section>
            <h3>{label}</h3>
            <ToggleSwitch toggleId={toggleId} isChecked={isChecked} handleToggle={handleToggle} />
        </Section>
    )
}

export default ToggleSection