// import { useContext, useEffect, useRef } from "react"
// import { WhiskeyContext } from "./WhiskeyProvider"
// import "./Whiskey.css"

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