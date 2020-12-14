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

        console.log("newWhiskeyToTry", newWhiskeyToTry)
        addUserWhiskey(newWhiskeyToTry)
    }
    return (
    <div className="comparable">
      <h3 className="whiskey__name">
      {comparable.title}
      </h3>
      <img className="whiskey__image" src={comparable.list_img_url} />
      <button onClick = {addWhiskeyToTry} > ADD TO TRY LIST</button>
    </div>
  );
    }