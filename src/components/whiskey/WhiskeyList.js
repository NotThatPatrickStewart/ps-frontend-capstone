import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { WhiskeyContext } from "./WhiskeyProvider";
import { Whiskey } from "./Whiskey";
import "./Whiskey.css"

export const WhiskeyList = (props) => {
    const { whiskeys, getWhiskeys } = useContext(WhiskeyContext)

    useEffect(() => {
        getWhiskeys()
    }, [])


    return (
        <div className="whiskeys">
            {
               whiskeys.map(whiskey => <Whiskey key={whiskey.id} whiskey={whiskey} />) 
            }
        </div>
    )

    // return (
    //     <div className="whiskeys">
    //         <h1>WHISKEYS</h1>
    //         <article className="whiskeyList">
    //             {whiskeys.map((whiskey) => {
    //                 return (
    //                     <h3>{whiskey.title}</h3>
    //                 )
    //             })}
    //         </article>
    //     </div>
    // )
}