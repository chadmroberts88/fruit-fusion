import React from 'react'
import styled from 'styled-components'

const StyledDashboardSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    border: 1px solid #a2a2a2;
    border-radius: 10px;
    padding: 1vmin;
`;

const DashboardSection = ({ heading, stat }) => {
    return (
        <StyledDashboardSection className='dashboard-section'>
            <h3>{heading}</h3>
            <h4>{stat}</h4>
        </StyledDashboardSection>
    )
}

export default DashboardSection