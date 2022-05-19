import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    height: fit-content;
`;

const OptionsSection = (props) => {

    return (
        <Section>
            {props.children}
        </Section>
    )
}

export default OptionsSection