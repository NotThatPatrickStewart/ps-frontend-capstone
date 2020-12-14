import { useContext, useEffect } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"
import "./Whiskey.css"
import { HaveTried } from "./HaveTried"

export const HaveTried = (props) => {
    const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext)

    useEffect(() => {
        getUserWhiskeys()
    }, [])

    return (
        <div className="whiskeys">
            <>
            <h1>WHISKEYS I'VE TRIED</h1> 
            {
                userWhiskeys.map(userWhiskey => <HaveTried key={userWhiskey.id} userWhiskey={userWhiskey} />
                )}
            </>
        </div>
    )
}