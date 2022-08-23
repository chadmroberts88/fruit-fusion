import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    color: #F25C54;
		font-weight: bold;
    cursor: pointer;

    :hover {
        color: #FF847E;
    }

`;

const SocialLink = ({ link, children }) => {

	return (
		<Link href={link} target="_blank">
			{children}
		</Link>
	)
}

export default SocialLink