import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1 style={headerStyles}>{props.title}</h1>
        </div>
    )
}

const headerStyles = {
    color: "aqua",
    fontSize: "calc(30px + 5vmin)",
    fontFamily: "'Titan One', cursive",
    margin: "20px 0px",
    textShadow: "2px 2px 0 #000",
    textAlign: "center"
}

Header.defaultProps = {
    title: "Fruit Fusion"
}

export default Header