import React from 'react'
import styled from 'styled-components'
import ToggleSwitch from './ToggleSwitch'

const Section = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    align-items: center;
    width: 50vmin;
    margin: 2vmin;
`;

const ToggleSection = ({ label, toggleId }) => {
    return (
        <Section>
            <h3>{label}</h3>
            <ToggleSwitch toggleId={toggleId} />
        </Section>
    )
}

export default ToggleSection