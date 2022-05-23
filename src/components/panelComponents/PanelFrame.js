import { React, useContext } from 'react'
import { UIContext } from '../../helper/Context';
import styled from 'styled-components'

const Frame = styled.div`
    background-color: ${props => props.bgColor};
    border-radius: 10px;
    width: 100vmin;
    height: 82vh;
    margin-bottom: 2vh;

    @media screen and (orientation: portrait) {
        width: 86vmin;
        height: 92vmin;
        margin-bottom: 2vmin;
    }

`;

const PanelFrame = ({ children }) => {

	const { darkModeOn } = useContext(UIContext);

	return (
		<Frame bgColor={darkModeOn ? "#333232" : "#ffeddd"}>
			{children}
		</Frame>
	)
}

export default PanelFrame