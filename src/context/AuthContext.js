import React, { createContext } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { LinkedIn, GitHub, Language } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import styled from 'styled-components';
import '@aws-amplify/ui-react/styles.css';
import '../amplify.css';
import awsExports from '../aws-exports';

export const AuthContext = createContext({});
Amplify.configure(awsExports);

const AuthContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background-color: #e8fccf;
	
	@supports (-webkit-touch-callout: none) {
		height: -webkit-fill-available;
	}
`;

const HeaderContainer = styled.div`
	margin-top: 120px;

	@supports (-webkit-touch-callout: none) {
		margin-top: 60px;
	}
`;

const FooterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	font-size: 0.75rem;
`;

const StyledIconButton = styled(IconButton)`
	&& {
		color: #000000;
	}
`;

const formFields = {
	signUp: {
		preferred_username: {
			labelHidden: true,
			placeholder: 'Player Name (Shown on leaderboard)',
			isRequired: true,
		}
	}
}

const components = {
	Header() {
		return (
			<HeaderContainer>
				<h1>Fruit Fusion</h1>
			</HeaderContainer>
		);
	},

	Footer() {
		return (
			<FooterContainer>
				Developed by Chad Roberts.
				<Box>
					<StyledIconButton href='https://github.com/chadmroberts88' target='_blank'>
						<GitHub fontSize='inherit' />
					</StyledIconButton>
					<StyledIconButton href={"https://www.linkedin.com/in/chadmroberts88"} target="_blank">
						<LinkedIn fontSize='inherit' />
					</StyledIconButton>
					<StyledIconButton href={"https://chadroberts.webflow.io"} target="_blank">
						<Language fontSize='inherit' />
					</StyledIconButton>
				</Box>
			</FooterContainer>
		)
	}
}

const AuthProvider = ({ children }) => {

	return (
		<AuthContainer>
			<Authenticator formFields={formFields} components={components}>
				{({ signOut, user }) => (
					<AuthContext.Provider value={{ signOut, user }}>
						{children}
					</AuthContext.Provider>
				)}
			</Authenticator>
		</AuthContainer>
	)
}

export default AuthProvider;