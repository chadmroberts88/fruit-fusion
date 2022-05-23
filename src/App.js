import { React, useState } from 'react'
import HeaderContainer from './containers/HeaderContainer'
import PanelContainer from './containers/PanelContainer'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { UIContext } from './helper/Context'

const AppContainer = styled.div`
	background-color: ${props => props.bgColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 2vmin;
	height: 100vh;
	width: 100vw;

	h4 {
		color: ${props => props.h3Color};
		font-size: 3vmin;
	}

	p {
		color: ${props => props.pColor};
		font-size: 2.5vmin;
		margin-bottom: 1.5vmin;
	}

	span {
		color: ${props => props.pColor};
        font-size: 2.5vmin;
        font-weight: bold;
		margin: 1vmin;
	}

`;

const App = () => {

	const [darkModeOn, setDarkModeOn] = useState(true);

	return (
		<UIContext.Provider value={{ darkModeOn, setDarkModeOn }}>
			<AppContainer
				id="app"
				bgColor={darkModeOn ? "black" : "#ffffef"}
				h3Color={darkModeOn ? "white" : "black"}
				pColor={darkModeOn ? "white" : "black"}
			>
				<Router>
					<HeaderContainer />
					<PanelContainer />
				</Router>
			</AppContainer>
		</UIContext.Provider>
	)

}

export default App