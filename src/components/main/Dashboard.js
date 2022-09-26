import React from 'react';
import styled from 'styled-components';
import StatsSection from '../dashboard/StatsSection';
import MenuSection from '../dashboard/MenuSection';
import UserSection from '../dashboard/UserSection';

const Container = styled.div`
	gap: 6px;

	@media screen and (orientation: landscape){
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 9fr;
	}

	@media screen and (orientation: portrait) {
		display: flex;
		flex-direction: column;
	}
`;

const RowCol = styled.div`
	gap: 6px;

	@media screen and (orientation: landscape){
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
	}

	@media screen and (orientation: portrait) {
		display: flex;
		flex-direction: column;
	}
`;

const Dashboard = ({ menuHandlers }) => {
	return (
		<Container>
			<UserSection />
			<RowCol>
				<MenuSection menuHandlers={menuHandlers} />
				<StatsSection />
			</RowCol>
		</Container>
	)
}

export default Dashboard;