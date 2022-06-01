import { React, useContext } from 'react'
import { ThemeContext } from '../../helper/Context';
import styled from 'styled-components'

const Frame = styled.div`
    background-color: ${props => props.bgColor};
    border-radius: 10px;

    /* @media screen and (orientation: portrait) {
        width: 86vmin;
        height: 92vmin;
        margin-bottom: 2vmin;
    } */

`;

const PanelFrame = ({ children }) => {

	const { darkModeOn } = useContext(ThemeContext);

	return (
		<Frame bgColor={darkModeOn ? "#333232" : "#f7d5b7"}>
			{children}
		</Frame>
	)
}

export default PanelFrame