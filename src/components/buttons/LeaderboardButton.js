import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdLeaderboard } from 'react-icons/md'
import styled from 'styled-components'

const Button = styled(MdLeaderboard)`
	font-size: 2rem;
	color: #1a7431;
	margin: 4px;
	cursor: pointer;

	:hover {
		color: #299844;
	}
`;

const LeaderboardButton = ({ path }) => {

	const navigate = useNavigate();

	return (
		<Button onClick={() => { navigate(path) }} />
	)
}

export default LeaderboardButton