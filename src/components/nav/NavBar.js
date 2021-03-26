import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    const clearLocalStorage = () => {
        localStorage.removeItem("app_user")
    }

    const currentUser = localStorage.getItem("app_user")
    
    return (
        <div className="navbar">
            <h1 className="navbar__title">
                ANORAK
            </h1>
            <p className="navbar__subtitle">
                FOR FANS OF THE UNUSUAL
            </p>
            <div className="navbar__links">
            <p className="navbar__item active">
                <Link className="navbar__link" to="/">SEARCH</Link>
            </p>
            <p className="navbar__item">
                <Link className="navbar__link" to="/to-try">TO TRY</Link>
            </p>
            <p className="navbar__item">
                <Link className="navbar__link" to="/have-tried">HAVE TRIED</Link>
            </p>
                   <div className="logout"> {localStorage.getItem("app_user") ? <Link className="navbar__link" to="/login" onClick={()=>{clearLocalStorage()}}>logout</Link>:<Link className="navbar__link" to="/login">login</Link> } </div>
            </div>
        </div>
    )
}