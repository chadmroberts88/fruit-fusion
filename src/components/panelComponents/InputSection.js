import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    width: 50vmin;
    margin: 2vmin;
`;

const InputSection = ({ label, children }) => {
    return (
        <Section>
            <h3>{label}</h3>
            {children}
        </Section>
    )
}

export default InputSection