import React from 'react'
import styled from 'styled-components'

const Link = styled.div`
    color: #F25C54;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    :hover {
		color: #FF847E;
    }

`;

const Option = ({ text, handleClick }) => {

	return (
		<Link onClick={() => { handleClick(); }}>
			{text}
		</Link>
	)
}

export default Option