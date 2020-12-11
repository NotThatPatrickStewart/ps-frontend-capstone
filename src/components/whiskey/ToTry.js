import { useContext, useEffect } from "react"
import { WhiskeyContext } from "./WhiskeyProvider"

export const ToTryButton = (props) => {
    const {getWhiskey, addWhiskey} = useContext(WhiskeyContext)

    const title = useRef(null)

    useEffect(() => {
        getWhiskey()
    }, [])
    
    const addWhiskeyToTry = () => {
        const comparableId = parseInt(comprable.current.value)
        {
            addWhiskey({
                title: title.current.value
            })
            .then(() => props.history.push("/to-try"))
        }
    }
    return (

    )
}