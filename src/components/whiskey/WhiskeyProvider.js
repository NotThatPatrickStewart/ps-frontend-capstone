import React, { useState } from "react"

export const WhiskeyContext = React.createContext()

export const WhiskeyProvider = (props) => {
    const [whiskeys, setWhiskeys] = useState([])

    const getWhiskeys = () => {
        return fetch ("http://localhost:8089/whiskeys")
        .then(response => response.json())
        .then(setWhiskeys)
    }
}