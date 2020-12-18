import React, { useContext } from "react";
import "./Whiskey.css";
import { WhiskeyContext } from "./WhiskeyProvider";

export const Comparable = ({comparable}) => {

    const { addUserWhiskey } = useContext(WhiskeyContext)
    
    const addWhiskeyToTry = (props) => {
        const newWhiskeyToTry = {
            title: comparable.title,
            whiskeyId: comparable.id,
            userId: parseInt(localStorage.getItem("app_user_id")),
            list_img_url: comparable.list_img_url,
            notes: "",
            rating: null
        }

        addUserWhiskey(newWhiskeyToTry)
    }

    return (
    <div className="comparable">
      <div className="whiskeyHeader">
      <h3 className="whiskey__name">
      {comparable.title}
      </h3>
      <img className="whiskey__image" src={comparable.list_img_url} alt="whiskey bottle" />
      </div>
      <div className="whiskeyData">
      <div className="whiskey__region">TYPE: {comparable.region}</div>
    <div className="whiskey__price">${comparable.price}</div>
    {/* <div className="whiskey__tags">{comparable.tags.title}</div> */}
    </div>
    <div className="buttonParentDiv">
      <button onClick = {addWhiskeyToTry} > ADD TO TRY LIST</button>
    </div>
    </div>
  );
    }