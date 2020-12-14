import { useContext, useEffect, useState } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"
import "./Whiskey.css"
import { Comparable } from "./Comparable"

export const ToTryList = (props) => {
    const { comparables, addUserWhiskey } = useContext(WhiskeyContext)
    const [whiskeysToTry, setWhiskeysToTry] = useState([])

    useEffect(() => {
        addUserWhiskey()
    }, [])

    useEffect(() => {
        if 
    })

    return (
        <div className="whiskeys">
            <>
            <h1>WHISKEYS TO TRY</h1> 
            {
                whiskeysToTry.map(whiskey => {
                    return <Comparable key={comparable.id} comparable={comparable} />
                })
            }
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