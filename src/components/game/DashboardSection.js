import React from 'react'
import styled from 'styled-components'

const StyledDashboardSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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