import { useContext, useEffect } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"
import "./Whiskey.css"
import { HaveTried } from "./HaveTried"

export const HaveTriedList = (props) => {
    const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext)

    useEffect(() => {
        getUserWhiskeys()
    }, [])

    //need if statement that returns on the conditin that userWhiskey.rating !== null
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