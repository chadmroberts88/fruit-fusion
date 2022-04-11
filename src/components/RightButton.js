import React from 'react'
import { BsCaretRightFill } from 'react-icons/bs'

function RightButton({ id, shiftTiles }) {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            shiftTiles(id);
        }}><BsCaretRightFill /></button>
    )
}

export default RightButton