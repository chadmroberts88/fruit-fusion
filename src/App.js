import { React, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserDataContext } from './context/UserDataContext'
import styled from 'styled-components'

import HeaderContainer from './containers/main/HeaderContainer'
import PanelContainer from './containers/main/PanelContainer'

const AppContainer = styled.div`
	background-color: ${props => props.bgColor};
	display: flex;
	align-items: center;
	justify-items: center;
	border: 2px solid white;
	border-radius: 2vmin;

	@media screen and (orientation: landscape){
		height: 90vh;
		width: 88vw;
		flex-direction: row;
	}

	@media screen and (orientation: portrait) {
		height: 86vh;
		width: 90vw;
		flex-direction: column;
	}

	h4 {
		color: ${props => props.textColor};
		font-size: 2.75vmin;
	}

	h5 {
		color: ${props => props.textColor};
		font-size: 2vmin;
		font-weight: normal;
		height: 2.5vmin;
        overflow: hidden;
        text-align: center;
		margin-top: 0.5vmin;
		margin-bottom: 2vmin;
	}

	h6 {
		color: ${props => props.textColor};
		font-size: 2.5vmin;
	}

	p {
		color: ${props => props.textColor};
		font-size: 1rem;
		margin-bottom: 1.5vmin;
	}

	span {
		color: ${props => props.textColor};
		font-size: 1rem;
        font-weight: bold;
		margin: 1vmin;
	}

`;

const App = () => {

	const { userData } = useContext(UserDataContext);

	return (
		<AppContainer
			id="app"
			bgColor={userData.darkModeOn ? "black" : "#ffffef"}
			textColor={userData.darkModeOn ? "white" : "black"}
		>
			<Router>
				<HeaderContainer />
				<PanelContainer />
			</Router>
		</AppContainer>
	)

}

export default App