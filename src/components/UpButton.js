import React from 'react'
import { BsCaretUpFill } from 'react-icons/bs'

function UpButton({ id, shiftTiles, addTiles }) {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            shiftTiles(id);
        }}><BsCaretUpFill /></button>
    )
}

export default UpButton