import React from 'react'
import { BsCaretLeftFill } from 'react-icons/bs'


function LeftButton({ id, shiftTiles }) {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            shiftTiles(id);
        }}><BsCaretLeftFill /></button>
    )
}

export default LeftButton