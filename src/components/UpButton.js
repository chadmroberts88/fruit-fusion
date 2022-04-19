import React from 'react'
import { BsCaretUpFill } from 'react-icons/bs'

function UpButton({ id, handleTiles, addTiles }) {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            handleTiles(id);
        }}><BsCaretUpFill /></button>
    )
}

export default UpButton