
import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { WhiskeyContext } from "./WhiskeyProvider";
import { Whiskey } from "./Whiskey";
import "./Whiskey.css"

export const WhiskeySearchList = (props) => {
    const { whiskeys, getWhiskeys, searchTerms } = useContext(WhiskeyContext)
    const [filteredWhiskeys, setFilteredWhiskeys] = useState([])
    
    // const [newWhiskeys, setNewWhiskeys] = useState([]) Could use this, then filter through this online 21, then use splice to find the index of this whiskey and remove it

    useEffect(() => {
        getWhiskeys()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") { //&& whiskey.comparable.id !== userWhiskey.whiskeyId - can I use this logic here and get it to know that I'm referenceing keys from both APIs?

            const subset = whiskeys.filter(whiskey => whiskey.title.toLowerCase().startsWith(searchTerms.toLowerCase())) 
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