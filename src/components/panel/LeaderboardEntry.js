import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import styled from 'styled-components'

const Entry = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 7vmin;
`;

const Banner = styled.div`
	background-color: ${props => props.bgColor};
	display: grid;
	grid-template-columns: 18% 16% 32% 22%;
	column-gap: 4%;
	align-items: center;
	justify-items: center;
	border-radius: 10px;
	height: 4vmin;
`;

const BannerSection = styled.div`
	display: grid;
	align-items: center;
	justify-items: center;
	width: 100%;
	overflow: hidden;
`;

const Photo = styled.img`
	border: 2px solid;
	border-color: #1A7431;
	border-radius: 50%;
	width: 7vmin;
	height: 7vmin;
`;

const LeaderboardEntry = ({ image, rank, username, score }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<Entry>
			<Banner bgColor={userData.darkModeOn ? '#282828' : '#1A7431'}>
				<BannerSection>
					<Photo src={image} />
				</BannerSection>
				<BannerSection>
					<h6>{rank}</h6>
				</BannerSection>
				<BannerSection>
					<h6>{username}</h6>
				</BannerSection>
				<BannerSection>
					<h6>{score}</h6>
				</BannerSection>
			</Banner>
		</Entry>
	)
}

export default LeaderboardEntry