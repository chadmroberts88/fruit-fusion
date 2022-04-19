import React from 'react'
import { BsCaretDownFill } from 'react-icons/bs'


function DownButton({ id, handleTiles }) {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            handleTiles(id);
        }}><BsCaretDownFill /></button>
    )
}

export default DownButton