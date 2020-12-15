import React, { useContext, useRef } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import "./Whiskey.css";

export const UserWhiskeyForm = (props) => {
    const { userWhiskeys, updateUserWhiskey, } = useContext(WhiskeyContext)

    const title = useRef(null)

   const addWhiskeyNote = () => {
        
        if ((userWhiskey.rating === null)) {

       updateUserWhiskey({
            title: title.current.value
       })
       .then(() => props.history.push("/to-try"))
    } else {
        updateUserWhiskey({
            title: title.current.value
       })
       .then(() => props.history.push("/have-tried"))
    }
   }
   return (
       <form className="addNote">
           <fieldset>
               <div className="form-note">
                   <label htmlFor="whiskeyNote">ADD NOTE</label>
                   <input type="text" id="whiskeyNote" ref={title} required autoFocus className="form-control" placeholder="whiskey notes" />
               </div>
           </fieldset>
           <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    addWhiskeyNote()
                }}
                className="btn btn-primary">
                SAVE NOTE
            </button>
       </form>
   )
 }