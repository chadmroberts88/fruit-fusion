import React from 'react'
import { BsCaretDownFill } from 'react-icons/bs'


function DownButton({ id, shiftTiles }) {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            shiftTiles(id);
        }}><BsCaretDownFill /></button>
    )
}

export default DownButton