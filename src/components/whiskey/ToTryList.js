import { useContext, useEffect } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"
import "./Whiskey.css"
import { ToTry } from "./ToTry"

export const ToTryList = (props) => {
    const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext)

    useEffect(() => {
        getUserWhiskeys()
    }, [])

        //need if statement that returns on the conditin that userWhiskey.rating === null
        return (
        <div className="whiskeys">
            <>
            <h1>WHISKEYS TO TRY</h1> 
            {
                userWhiskeys.map(userWhiskey => <ToTry key={userWhiskey.id} userWhiskey={userWhiskey} />
                )}
            </>
        </div>
    )
}