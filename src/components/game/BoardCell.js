import { React, useState, memo, useContext } from 'react'
import { UserDataContext } from '../../context/UserDataContext'
import { GameContext } from '../../context/GameContext'
import styled from 'styled-components'

const Cell = styled.div`
    background-color: lightgrey;
    border-radius: 2vmin;
	touch-action: none;
`;

const BoardCell = ({ cellRow, cellCol }) => {

	const [touchStartX, setTouchStartX] = useState(null);
	const [touchStartY, setTouchStartY] = useState(null);
	const { handleGameAction } = useContext(GameContext);
	const { useSwipeOn } = useContext(UserDataContext);

	const minSwipeDistance = 50;

	const handleTouchStart = (e) => {

		setTouchStartX(e.targetTouches[0].clientX)
		setTouchStartY(e.targetTouches[0].clientY)
	}

	const handleTouchEnd = (e) => {

		let touchEndX = e.changedTouches[0].clientX;
		let touchEndY = e.changedTouches[0].clientY;
		let actionId = 'none';

		if (!touchStartX || !touchEndX) {
			return
		}

		if (!touchStartY || !touchEndY) {
			return
		}

		const distanceX = touchStartX - touchEndX
		const isLeftSwipe = distanceX > minSwipeDistance
		const isRightSwipe = distanceX < -minSwipeDistance

		const distanceY = touchStartY - touchEndY
		const isUpSwipe = distanceY > minSwipeDistance
		const isDownSwipe = distanceY < -minSwipeDistance


		if (isLeftSwipe || isRightSwipe) {
			isLeftSwipe ? actionId = `left-${cellRow}` : actionId = `right-${cellRow}`;
		}

		if (isUpSwipe || isDownSwipe) {
			isUpSwipe ? actionId = `up-${cellCol}` : actionId = `down-${cellCol}`;
		}

		handleGameAction(actionId);
	}

	return (
		<Cell
			key={`cell-${cellRow}-${cellCol}`}
			id={`cell-${cellRow}-${cellCol}`}
			className="cell"
			onTouchStart={useSwipeOn ? handleTouchStart : null}
			onTouchEnd={useSwipeOn ? handleTouchEnd : null}
		>
		</Cell>
	)
}

export default memo(BoardCell)