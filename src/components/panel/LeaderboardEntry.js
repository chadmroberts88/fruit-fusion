import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const Entry = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
`;

const Banner = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	grid-template-columns: 20% 38% 30%;
	column-gap: 4%;
	align-items: center;
	justify-items: center;
	border-radius: 10px;
`;

const BannerSection = styled.div`
	display: grid;
	align-items: center;
	width: 100%;
	overflow: hidden;
	padding: 0 10px;
`;

const EntryText = styled(Typography)`
	&& {
		color: #FFFFFF;
	}
`;

const LeaderboardEntry = ({ rank, username, score }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<Entry>
			<Banner bgColor={userData.darkModeOn ? '#282828' : '#f25c54'}>
				<BannerSection>
					<EntryText>{rank}</EntryText>
				</BannerSection>
				<BannerSection>
					<EntryText>{username}</EntryText>
				</BannerSection>
				<BannerSection>
					<EntryText>{score}</EntryText>
				</BannerSection>
			</Banner>
		</Entry>
	)
}

export default LeaderboardEntry