import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/search">SEARCH</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/to-try">TO TRY</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/have-tried">HAVE TRIED</Link>
            </li>
        </ul>
    )
}