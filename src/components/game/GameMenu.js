import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import { AuthContext } from '../../context/AuthContext';
import { IconButton, Typography } from '@mui/material';
import { Settings, QuestionMark, Leaderboard, RestartAlt, Logout } from '@mui/icons-material';
import styled from 'styled-components';

const Menu = styled.div`
	background-color: ${props => props.color};
	display: grid;
	justify-items: center;
	align-items: center;
	gap: 6px;
	border-radius: 10px;
	padding: 6px;

	@media screen and (orientation: landscape) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
		height: 100%;
	}

	@media screen and (orientation: portrait) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		width: 100%;
	}
`;

const MenuSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #1a7431;
`;

const MenuHeading = styled(Typography)`
	&& {
		text-align: center;
		font-weight: bold;

		@media screen and (orientation: portrait) {
			display: none;
		}
	}
`;

const StyledIconButton = styled(IconButton)`
	&& {
		display: flex;
		flex-direction: column;
		color: #f25c54;
	}
`;

const GameMenu = ({ settingsHandler, howToHandler, leaderboardHandler, resetHandler }) => {

	const { userData } = useContext(UserDataContext);
	const { signOut } = useContext(AuthContext);

	return (
		<Menu id="game-menu" color={userData.darkModeOn ? '#282828' : '#96E072'}>
			<MenuSection>
				<MenuHeading>Settings</MenuHeading>
				<StyledIconButton size="large" onClick={() => { settingsHandler() }}>
					<Settings fontSize='inherit' />
				</StyledIconButton>
			</MenuSection>

			<MenuSection>
				<MenuHeading>How To Play</MenuHeading>
				<StyledIconButton size="large" onClick={() => { howToHandler() }}>
					<QuestionMark fontSize='inherit' />
				</StyledIconButton>
			</MenuSection>

			<MenuSection>
				<MenuHeading>Leaderboard</MenuHeading>
				<StyledIconButton size="large" onClick={() => { leaderboardHandler() }}>
					<Leaderboard fontSize='inherit' />
				</StyledIconButton>
			</MenuSection>

			<MenuSection>
				<MenuHeading>Reset Game</MenuHeading>
				<StyledIconButton size="large" onClick={() => { resetHandler() }}>
					<RestartAlt fontSize='inherit' />
				</StyledIconButton>
			</MenuSection>

			<MenuSection>
				<MenuHeading>Sign Out</MenuHeading>
				<StyledIconButton size="large" onClick={() => { signOut() }}>
					<Logout fontSize='inherit' />
				</StyledIconButton>
			</MenuSection>
		</Menu>
	)
}

export default GameMenu;