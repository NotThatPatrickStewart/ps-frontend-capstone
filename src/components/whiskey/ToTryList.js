import { useContext, useEffect, useState } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"
import "./Whiskey.css"
import { ComparableToTry } from "./ComparablesToTry"

export const ToTryList = (props) => {
    const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext)

    useEffect(() => {
        getUserWhiskeys()
    }, [])

    // useEffect(() => {
        
    // })

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



// export const ToTry = (props) => {
//     const {getWhiskey, addWhiskey} = useContext(WhiskeyContext)

//     const title = useRef(null)

//     useEffect(() => {
//         getWhiskey()
//     }, [])
    
//     const addWhiskeyToTry = () => {
//         const comparableId = parseInt(comparable.current.value)
//         {
//             addWhiskey({
//                 title: title.current.value
//             })
//             .then(() => props.history.push("/to-try"))
//         }
//     }
//     return (
//         <button type="submit"
//             onClick={event => {
//                 event.preventDefault()
//                 addWhiskeyToTry()
//             }}
//             className="btn btn-primary">
//             from ToTry.js
//         </button>
//     )
// }