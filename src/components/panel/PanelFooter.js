import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 14%;
`;

const PanelFooter = (props) => {
	return (
		<Footer className='panel-footer'>
			{props.children}
		</Footer>
	)
}

export default PanelFooter