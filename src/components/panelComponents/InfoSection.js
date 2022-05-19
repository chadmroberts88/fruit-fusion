import React from 'react'
import styled from 'styled-components'
import ToggleSwitch from './ToggleSwitch'

const Section = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 2vmin;
    align-items: center;
    width: 60vmin;
    margin: 1vmin;
`;

const InfoSection = ({ info }) => {

    let elements = [];

    for (let i = 0; i < info.length; i++) {
        elements.push(<h3 key={`label-${i}`}>{info[i].label}</h3>);
        elements.push(<h4 key={`data-${i}`} style={{ textAlign: 'center' }}>{info[i].data}</h4>);
    }

    return (
        <Section>
            {elements}
        </Section>
    )
}

export default InfoSection