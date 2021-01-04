import React, { useContext } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"
import "./Whiskey.css"

export const WhiskeySearch = (props) => {
    const { setSearchTerms } = useContext(WhiskeyContext)

    return (
        <>
            SEARCH:
            <input type="text"
            className="input--wide"
            onKeyUp={
                (keyEvent) => setSearchTerms(keyEvent.target.value)
            }
            placeholder="ENTER A WHISKEY YOU LIKE" />
        </>
    )
}