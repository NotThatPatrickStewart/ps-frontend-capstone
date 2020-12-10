import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { WhiskeyContext } from "./WhiskeyProvider";
import { Whiskey } from "./Whiskey";
import "./Whiskey.css"

export const WhiskeyList = (props) => {
    const { whiskeys, getWhiskeys, searchTerms } = useContext(WhiskeyContext)
    const [filteredWhiskeys, setFilteredWhiskeys] = useState([])

    useEffect(() => {
        getWhiskeys()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {

            whiskeys.map(whiskey => {

            })

            const subset = whiskeys.filter(whiskey => whiskey.title.toLowerCase().includes(searchTerms.toLowerCase())) 
            setFilteredWhiskeys(subset)
        } else {
            setFilteredWhiskeys([])
        }
    }, [searchTerms, whiskeys])


  return (
        <div className="whiskeys">
            <>
                <h1>WHISKEYS</h1>

                {
                    filteredWhiskeys.map(whiskey => {
                        return <Whiskey key={whiskey.id} whiskey={whiskey} />
                    })
                }
            </>
        </div>
    )


    //RETURNS LIST OF WHISKEYS USING WHISKEY FUNCTION FROM WHISKEY.JS
    // return (
    //     <div className="whiskeys">
    //         {
    //            whiskeys.map(whiskey => <Whiskey key={whiskey.id} whiskey={whiskey} />) 
    //         }
    //     </div>
    // )


    //RETURNS LIST OF WHISKEYS FROM THIS MODULE
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