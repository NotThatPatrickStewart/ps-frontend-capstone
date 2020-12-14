import { useContext, useEffect } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"
import "./Whiskey.css"
import { ComparableToTry } from "./ComparablesToTry"

export const ToTryList = (props) => {
    const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext)

    useEffect(() => {
        getUserWhiskeys()
    }, [])

    return (
        <div className="whiskeys">
            <>
            <h1>WHISKEYS TO TRY</h1> 
            {
                userWhiskeys.map(userWhiskey => <ComparableToTry key={userWhiskey.id} userWhiskey={userWhiskey} />
                )}
            </>
        </div>
    )
}