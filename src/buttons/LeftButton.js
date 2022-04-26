import React from 'react'
import { BsCaretLeftFill } from 'react-icons/bs'


const LeftButton = ({ id, handleTiles }) => {
    return (
        <button id={id} className="arrow-button" onClick={() => {
            handleTiles(id);
        }}><BsCaretLeftFill /></button>
    )
}

export default LeftButton