import React, { useContext } from 'react';
import { Typography, Button, useTheme } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import styled from 'styled-components';

const Container = styled.div`
	background-color: ${props => props.bgColor};
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	padding: 10px;
	white-space: nowrap;
	overflow: hidden;
	gap: 10px;
`;

const WelcomeSection = styled.div`
	display: flex;
	white-space: nowrap;
	overflow: hidden;

	@media screen and (orientation: landscape){
		flex-direction: column;
		justify-content: center;
	}

	@media screen and (orientation: portrait) {
		flex-direction: row;
		align-items: center;
		gap: 6px;
	}
`;

const UserSection = () => {

	const { signOut, user } = useContext(AuthContext);
	const theme = useTheme();

	return (
		<Container bgColor={theme.palette.primary.dark}>
			<WelcomeSection>
				<Typography variant='h3'>Welcome 👋</Typography>
				<Typography variant='body2'>{`${user.attributes.preferred_username}`}</Typography>
			</WelcomeSection>
			<Button
				variant='contained'
				color='secondary'
				size='small'
				sx={{ textTransform: 'none' }}
				onClick={() => { signOut() }}
			>
				Sign Out
			</Button>
		</Container>
	)
}

export default UserSection;