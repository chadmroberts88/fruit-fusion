import React from 'react'
import styled from 'styled-components'

const Entry = styled.div`
    display: grid;
    align-items: center;
    width: 100%;
    height: 8vmin;
`;

const Banner = styled.div`
    display: grid;
    grid-template-columns: 18% 16% 32% 22%;
    column-gap: 4%;
    align-items: center;
    justify-items: center;
    background-color: #d35b40;
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
    border: 2px solid #d35b40;
    border-radius: 50%;
    width: 7vmin;
    height: 7vmin;
`;

const LeaderboardEntry = ({ image, username, score }) => {

	return (
		<Entry>
			<Banner>
				<BannerSection>
					<Photo src={image} />
				</BannerSection>
				<BannerSection>
					<h6 style={{ color: "white" }}>{'rank'}</h6>
				</BannerSection>
				<BannerSection>
					<h6 style={{ color: "white" }}>{username}</h6>
				</BannerSection>
				<BannerSection>
					<h6 style={{ color: "white" }}>{score}</h6>
				</BannerSection>
			</Banner>
		</Entry>
	)
}

export default LeaderboardEntry