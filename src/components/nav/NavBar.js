import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



export const NavBar = (props) => {
    return (
        <div className="navbar">
            <p className="navbar__item active">
                <Link className="navbar__link" to="/">SEARCH</Link>
            </p>
            <p className="navbar__item">
                <Link className="navbar__link" to="/to-try">TO TRY</Link>
            </p>
            <p className="navbar__item">
                <Link className="navbar__link" to="/have-tried">HAVE TRIED</Link>
            </p>
        </div>
    )
}