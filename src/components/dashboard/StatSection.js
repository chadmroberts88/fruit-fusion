import { React, memo, useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const Section = styled.div`
	background-color: ${props => props.color};
	display: grid;
	column-gap: 1vmin;
	width: 100%;
	justify-items: center;
	align-items: center;
  padding: 6px;
	white-space: nowrap;
	border-radius: 10px;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr;
`;

const SectionHeading = styled(Typography)`
	&& {
		color: #1a7431;
		font-weight: bold;
	}
`;

const SectionStat = styled(Typography)`
	&& {
		color: #f25c54;
		font-weight: bold;
	}
`;

const StatSection = ({ heading, stat }) => {

	const { userData } = useContext(UserDataContext);

	return (
		<Section className="stat-section" color={userData.darkModeOn ? '#282828' : '#96E072'}>
			<SectionHeading>{heading}</SectionHeading>
			<SectionStat fontSize='large'>{stat}</SectionStat>
		</Section>
	)
}

export default memo(StatSection);