import React from 'react'
import { BsCaretRightFill } from 'react-icons/bs'

function RightButton({ id, handleTiles }) {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            handleTiles(id);
        }}><BsCaretRightFill /></button>
    )
}

export default RightButton